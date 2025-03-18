document.addEventListener('DOMContentLoaded', function() {
  // Check for saved theme preferences
  const savedDarkMode = localStorage.getItem('legoThemeDark');
  const savedColorTheme = localStorage.getItem('legoColorTheme');
  
  if (savedDarkMode === 'true') {
    document.body.classList.add('dark-mode');
    updateDarkModeIcon(true);
  }
  
  if (savedColorTheme) {
    document.body.classList.add(savedColorTheme);
  }

  // Resource data - inline to avoid CORS issues
  const resources = {
    "title": "LEGO Resources Hub",
    "description": "A curated collection of the best LEGO resources for builders, collectors, and enthusiasts.",
    "categories": [
      {
        "id": "official-resources",
        "title": "Official LEGO Resources",
        "icon": "fas fa-certificate",
        "resources": [
          {
            "url": "https://www.lego.com/",
            "name": "LEGO Official Website",
            "description": "The official LEGO website with shop, set information, building instructions, and inspiration for creative building."
          },
          {
            "url": "https://www.lego.com/en-us/categories/adults-welcome",
            "name": "LEGO Adults Welcome",
            "description": "LEGO sets designed specifically for adult builders, featuring complex builds and display-worthy models."
          },
          {
            "url": "https://www.lego.com/en-us/kids",
            "name": "LEGO Kids",
            "description": "Games, activities, and building inspiration designed for younger LEGO enthusiasts."
          },
          {
            "url": "https://www.bricklink.com/v2/main.page",
            "name": "BrickLink (LEGO Marketplace)",
            "description": "The world's largest online marketplace for buying and selling LEGO parts, minifigures, and sets. Now owned by the LEGO Group."
          },
          {
            "url": "https://www.lego.com/en-us/service/buildinginstructions",
            "name": "LEGO Building Instructions",
            "description": "Free official building instructions for thousands of LEGO sets, searchable by set number, theme, or year."
          },
          {
            "url": "https://www.lego.com/en-us/themes/ideas",
            "name": "LEGO Ideas",
            "description": "Submit your own LEGO design ideas, vote for other creators' concepts, and see fan designs become official LEGO sets."
          },
          {
            "url": "https://education.lego.com/en-us",
            "name": "LEGO Education",
            "description": "Educational resources and LEGO sets designed for classroom learning and STEM education."
          },
          {
            "url": "https://www.lego.com/en-us/vip",
            "name": "LEGO VIP Program",
            "description": "LEGO's loyalty program that offers points on purchases, exclusive rewards, early access to sets, and special events."
          }
        ]
      },
      {
        "id": "community-resources",
        "title": "Community Resources",
        "icon": "fas fa-users",
        "resources": [
          {
            "url": "https://www.brothers-brick.com/",
            "name": "The Brothers Brick",
            "description": "One of the most popular LEGO blogs featuring news, reviews, custom builds, and techniques from the adult fan community."
          },
          {
            "url": "https://www.eurobricks.com/forum/",
            "name": "Eurobricks",
            "description": "One of the largest LEGO communities with active forums covering all LEGO themes, MOCs, techniques, and collecting."
          },
          {
            "url": "https://www.reddit.com/r/lego/",
            "name": "LEGO Subreddit",
            "description": "A large Reddit community dedicated to LEGO with over 1 million members sharing builds, collections, news, and discussions."
          },
          {
            "url": "https://rebrickable.com/",
            "name": "Rebrickable",
            "description": "Track your LEGO collection and discover what you can build with the parts you already own. Features thousands of custom MOC instructions."
          },
          {
            "url": "https://brickset.com/",
            "name": "Brickset",
            "description": "Comprehensive database of LEGO sets released since 1949 with information, reviews, instructions, and collection management tools."
          },
          {
            "url": "https://www.lugnet.com/",
            "name": "LUGNET",
            "description": "LEGO Users Group Network, one of the oldest online LEGO fan communities with resources and discussions for LEGO enthusiasts."
          },
          {
            "url": "https://brickarchitect.com/",
            "name": "Brick Architect",
            "description": "Resources for LEGO Architecture enthusiasts including reviews, building techniques, and storage solutions."
          },
          {
            "url": "https://www.newelementary.com/",
            "name": "New Elementary",
            "description": "Blog focused on new LEGO elements and creative building techniques, featuring interviews with LEGO designers."
          }
        ]
      },
      {
        "id": "building-techniques",
        "title": "Building Techniques",
        "icon": "fas fa-tools",
        "resources": [
          {
            "url": "https://www.youtube.com/c/Bricksie",
            "name": "Bricksie",
            "description": "YouTube channel with tutorials for advanced building techniques, SNOT (Studs Not On Top) methods, and microscale building."
          },
          {
            "url": "https://www.youtube.com/c/JANGBRiCKS",
            "name": "Jangbricks",
            "description": "Popular LEGO YouTube channel featuring reviews, build videos, and modification guides for official LEGO sets."
          },
          {
            "url": "https://www.youtube.com/c/BrickBuilderLAB",
            "name": "Brick Builder",
            "description": "YouTube channel dedicated to LEGO building techniques, tips, and tutorials for various building styles."
          },
          {
            "url": "https://bricknerd.com/home/category/techniques",
            "name": "Brick Nerd Techniques",
            "description": "Collection of articles focusing on advanced building techniques for creating custom LEGO models."
          },
          {
            "url": "https://www.flickr.com/groups/lego_techniques/",
            "name": "LEGO Techniques Flickr Group",
            "description": "Community of builders sharing images and explanations of advanced building techniques."
          },
          {
            "url": "https://swooshable.com/",
            "name": "Swooshable",
            "description": "Resource site dedicated to teaching LEGO building techniques, with an emphasis on SNOT methods."
          },
          {
            "url": "https://brickengineer.com/",
            "name": "Brick Engineer",
            "description": "Engineering principles applied to LEGO building, focusing on stability, strength, and advanced mechanics in creations."
          },
          {
            "url": "https://www.masteringleo.com/",
            "name": "Mastering LEO",
            "description": "Comprehensive guide to the LEGO Element Organization (LEO) system for efficient building and parts management."
          }
        ]
      },
      {
        "id": "custom-designs",
        "title": "Custom Designs & MOCs",
        "icon": "fas fa-lightbulb",
        "resources": [
          {
            "url": "https://rebrickable.com/mocs/",
            "name": "Rebrickable MOCs",
            "description": "Thousands of custom LEGO creations with instructions, parts lists, and the ability to check if you can build them with your collection."
          },
          {
            "url": "https://ideas.lego.com/",
            "name": "LEGO Ideas Gallery",
            "description": "Browse thousands of fan-created LEGO designs, with the most popular potentially becoming official LEGO sets."
          },
          {
            "url": "https://www.mocpages.com/",
            "name": "MOCpages",
            "description": "One of the original sites for sharing custom LEGO creations, with thousands of user-submitted builds."
          },
          {
            "url": "https://www.flickr.com/groups/lego/",
            "name": "LEGO Flickr Pool",
            "description": "Massive collection of LEGO photography featuring custom builds and creations from around the world."
          },
          {
            "url": "https://buildandplay.com/",
            "name": "Build & Play",
            "description": "Custom LEGO instructions for various themes and difficulty levels, with both free and premium options."
          },
          {
            "url": "https://www.mochub.com/",
            "name": "MOC Hub",
            "description": "Marketplace for buying and selling custom LEGO MOC instructions created by fans."
          },
          {
            "url": "https://www.instagram.com/explore/tags/legomoc/",
            "name": "LEGO MOC Instagram",
            "description": "Explore the #legomoc hashtag on Instagram to discover countless custom creations from builders worldwide."
          },
          {
            "url": "https://www.brickvault.toys/collections/custom-instructions",
            "name": "Brick Vault Custom Instructions",
            "description": "High-quality custom LEGO instructions from professional builders, known for accurate Star Wars and architecture models."
          }
        ]
      },
      {
        "id": "digital-building",
        "title": "Digital Building Tools",
        "icon": "fas fa-desktop",
        "resources": [
          {
            "url": "https://www.bricklink.com/v3/studio/download.page",
            "name": "BrickLink Studio",
            "description": "Free digital LEGO building software that allows you to design models, create instructions, and order parts directly."
          },
          {
            "url": "https://www.ldraw.org/",
            "name": "LDraw",
            "description": "Open standard for LEGO CAD programs with an extensive parts library for digital LEGO building."
          },
          {
            "url": "https://www.mecabricks.com/",
            "name": "Mecabricks",
            "description": "Browser-based LEGO building tool with impressive rendering capabilities and a growing community of digital builders."
          },
          {
            "url": "https://www.leocad.org/",
            "name": "LeoCAD",
            "description": "Free, open-source LEGO CAD application for creating virtual LEGO models with thousands of parts and easy-to-use interface."
          },
          {
            "url": "https://bricksmith.sourceforge.net/",
            "name": "Bricksmith",
            "description": "Mac-specific LEGO CAD software for designing virtual LEGO models using the LDraw parts library."
          },
          {
            "url": "https://www.stud.io/",
            "name": "Stud.io",
            "description": "Powerful digital LEGO design software with photorealistic rendering capabilities and integration with BrickLink for ordering parts."
          },
          {
            "url": "https://brickdesigner.app/",
            "name": "Brick Designer",
            "description": "Web-based LEGO design tool optimized for mobile devices, making digital building accessible on smartphones and tablets."
          },
          {
            "url": "https://www.ldd-lego.com/",
            "name": "LEGO Digital Designer Archive",
            "description": "Archive of the discontinued official LEGO Digital Designer software that can still be downloaded and used."
          }
        ]
      },
      {
        "id": "minifigures",
        "title": "Minifigures",
        "icon": "fas fa-user",
        "resources": [
          {
            "url": "https://www.minifigures.com/",
            "name": "Minifigures.com",
            "description": "Comprehensive resource for LEGO minifigures with a marketplace for buying and selling rare and custom minifigs."
          },
          {
            "url": "https://brickset.com/minifigs",
            "name": "Brickset Minifigure Database",
            "description": "Extensive database of LEGO minifigures with images, details, and which sets they appear in."
          },
          {
            "url": "https://minifigpriceguide.com/",
            "name": "Minifig Price Guide",
            "description": "Market values and price trends for LEGO minifigures, helping collectors understand fair prices."
          },
          {
            "url": "https://www.firestartoys.com/",
            "name": "FireStar Toys",
            "description": "Retailer specializing in custom minifigure parts, accessories, and exclusive designs not found in official LEGO sets."
          },
          {
            "url": "https://www.minifigures.com/collections/custom-printed-minifigures",
            "name": "Custom Printed Minifigures",
            "description": "Collection of professionally printed custom minifigures with designs not available from LEGO officially."
          },
          {
            "url": "https://www.citizenbrick.com/",
            "name": "Citizen Brick",
            "description": "High-quality custom minifigure designs and accessories for adult collectors, featuring unique themes and detailed printing."
          },
          {
            "url": "https://www.eclipsegrafx.com/",
            "name": "EclipseGrafx",
            "description": "Custom minifigure designs and accessories with a focus on military, historical, and sci-fi themes."
          },
          {
            "url": "https://www.brickwarriors.com/",
            "name": "Brick Warriors",
            "description": "Custom-designed weapons, armor, and accessories for LEGO minifigures, especially for historical and fantasy themes."
          }
        ]
      },
      {
        "id": "shopping-resources",
        "title": "Shopping Resources",
        "icon": "fas fa-shopping-cart",
        "resources": [
          {
            "url": "https://www.brickeconomy.com/",
            "name": "Brick Economy",
            "description": "LEGO market data site tracking prices, inventory, and value trends for sets, helping shoppers find deals and investment opportunities."
          },
          {
            "url": "https://brickseek.com/",
            "name": "BrickSeek",
            "description": "Inventory checking tool to find LEGO sets on clearance or in stock at local retailers like Walmart, Target, and more."
          },
          {
            "url": "https://www.brickowl.com/",
            "name": "BrickOwl",
            "description": "Marketplace for buying and selling LEGO parts, sets, and minifigures with integration tools for sellers."
          },
          {
            "url": "https://www.bricsmart.com/",
            "name": "BricSmart",
            "description": "Specialized LEGO retailer offering sets, parts, and custom kits at competitive prices, including retired products."
          },
          {
            "url": "https://www.brickloot.com/",
            "name": "Brick Loot",
            "description": "LEGO subscription box service delivering custom kits, accessories, and building challenges monthly to subscribers."
          },
          {
            "url": "https://www.toysperiod.com/",
            "name": "Toys Period",
            "description": "Online store specializing in retired and hard-to-find LEGO sets at competitive prices with worldwide shipping."
          },
          {
            "url": "https://www.brickpicker.com/",
            "name": "BrickPicker",
            "description": "LEGO investment and collection tracking site with price guides, set databases, and market trend analysis."
          },
          {
            "url": "https://www.bricklinknetwork.com/",
            "name": "BrickLink Network",
            "description": "Tools and resources for BrickLink sellers and buyers to optimize their experience on the marketplace."
          }
        ]
      },
      {
        "id": "lego-conventions",
        "title": "LEGO Conventions & Events",
        "icon": "fas fa-calendar-alt",
        "resources": [
          {
            "url": "https://brickworld.com/",
            "name": "Brick World",
            "description": "Series of LEGO fan events held throughout the year in various US cities, featuring huge displays, competitions, and vendors."
          },
          {
            "url": "https://brickfair.com/",
            "name": "BrickFair",
            "description": "Large LEGO fan conventions held in multiple locations across the US, showcasing impressive builds and offering activities for all ages."
          },
          {
            "url": "https://www.brickfestlive.com/",
            "name": "Brick Fest Live",
            "description": "Touring LEGO fan experience with hands-on building activities, massive displays, and LEGO-themed attractions and games."
          },
          {
            "url": "https://brickvention.com.au/",
            "name": "Brickvention",
            "description": "Australia's premier LEGO convention held annually in Melbourne, featuring creations from builders across Australia and beyond."
          },
          {
            "url": "https://www.legolanddiscoverycenter.com/",
            "name": "LEGOLAND Discovery Centers",
            "description": "Indoor LEGO attraction centers located in major cities worldwide with rides, building areas, and 4D movies."
          },
          {
            "url": "https://www.brickcon.org/",
            "name": "BrickCon",
            "description": "One of the oldest LEGO conventions in North America, held annually in Seattle with impressive displays and building competitions."
          },
          {
            "url": "https://www.skærbæk-fan-weekend.dk/",
            "name": "Skærbæk Fan Weekend",
            "description": "Annual LEGO fan event in Denmark (near LEGO headquarters) with exclusive workshops, designer meetings, and impressive displays."
          },
          {
            "url": "https://www.brickuniverse.com/",
            "name": "Brick Universe",
            "description": "LEGO fan conventions held in various cities featuring professional LEGO artists, building zones, and specialty vendors."
          }
        ]
      }
    ]
  };

  // Populate UI with data
  populateCategories(resources.categories);
  populateResources(resources.categories);
  setupEventListeners();
  
  // Set up event listeners
  function setupEventListeners() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    
    if (menuToggle && sidebar) {
      menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
      });
    }
    
    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    if (darkModeToggle) {
      darkModeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        const isDarkMode = document.body.classList.toggle('dark-mode');
        
        // Save preference to local storage
        localStorage.setItem('legoThemeDark', isDarkMode ? 'true' : 'false');
        
        // Update icon
        updateDarkModeIcon(isDarkMode);
      });
    }
    
    // Color theme toggle
    const colorThemeToggle = document.getElementById('color-theme-toggle');
    
    if (colorThemeToggle) {
      colorThemeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove existing color themes
        document.body.classList.remove('theme-blue', 'theme-yellow', 'theme-green');
        
        // Get current theme
        let currentTheme = '';
        if (localStorage.getItem('legoColorTheme')) {
          currentTheme = localStorage.getItem('legoColorTheme');
        }
        
        // Rotate through themes
        let newTheme = '';
        switch(currentTheme) {
          case '':
            newTheme = 'theme-blue';
            break;
          case 'theme-blue':
            newTheme = 'theme-yellow';
            break;
          case 'theme-yellow':
            newTheme = 'theme-green';
            break;
          case 'theme-green':
            newTheme = '';
            break;
          default:
            newTheme = 'theme-blue';
        }
        
        // Apply new theme
        if (newTheme) {
          document.body.classList.add(newTheme);
        }
        
        // Save preference to local storage
        localStorage.setItem('legoColorTheme', newTheme);
      });
    }
    
    // Search functionality
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        filterResources(searchTerm);
      });
    }
    
    // Category click handling
    document.addEventListener('click', function(event) {
      const categoryItem = event.target.closest('.category-item');
      if (categoryItem) {
        const categoryId = categoryItem.getAttribute('data-category');
        scrollToCategory(categoryId);
        
        // Mark active category
        document.querySelectorAll('.category-item').forEach(item => {
          item.classList.remove('active');
        });
        categoryItem.classList.add('active');
        
        // Close sidebar on mobile
        if (window.innerWidth <= 992) {
          sidebar.classList.remove('active');
        }
      }

      // Back to top button
      if (event.target.closest('.back-to-top')) {
        event.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });
  }
  
  // Update dark mode icon based on current theme
  function updateDarkModeIcon(isDarkMode) {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    if (darkModeToggle) {
      const icon = darkModeToggle.querySelector('i');
      
      if (icon) {
        if (isDarkMode) {
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');
        } else {
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon');
        }
      }
    }
  }
  
  // Populate categories in the sidebar
  function populateCategories(categories) {
    const categoriesList = document.getElementById('categories-list');
    
    if (!categoriesList) return;
    
    // Clear existing categories
    categoriesList.innerHTML = '';
    
    // Loop through categories and create category items
    categories.forEach(category => {
      const categoryItem = document.createElement('div');
      categoryItem.classList.add('category-item');
      categoryItem.setAttribute('data-category', category.id);
      
      // Add icon and name
      categoryItem.innerHTML = `
        <div class="category-icon">
          <i class="${category.icon}"></i>
        </div>
        ${category.title}
      `;
      
      categoriesList.appendChild(categoryItem);
    });

    // Set first category as active by default
    if (categoriesList.firstChild) {
      categoriesList.firstChild.classList.add('active');
    }
  }
  
  // Populate resources in the main content
  function populateResources(categories) {
    const resourcesContainer = document.getElementById('resources-container');
    
    if (!resourcesContainer) return;
    
    // Clear existing resources
    resourcesContainer.innerHTML = '';
    
    // Loop through categories and create resource sections
    categories.forEach(category => {
      const sectionElement = document.createElement('div');
      sectionElement.classList.add('category-section');
      sectionElement.id = category.id;
      
      // Create section header
      const categoryHeader = document.createElement('div');
      categoryHeader.classList.add('category-header');
      
      const categoryTitle = document.createElement('h2');
      categoryTitle.classList.add('category-title');
      
      // Add icon to title
      categoryTitle.innerHTML = `
        <div class="category-title-icon">
          <i class="${category.icon}"></i>
        </div>
        ${category.title}
      `;
      
      const resourceCount = document.createElement('span');
      resourceCount.classList.add('resource-count');
      resourceCount.textContent = category.resources.length;
      
      categoryHeader.appendChild(categoryTitle);
      categoryHeader.appendChild(resourceCount);
      sectionElement.appendChild(categoryHeader);
      
      // Create resources grid
      const resourcesGrid = document.createElement('div');
      resourcesGrid.classList.add('resources-grid');
      
      // Add resources to grid
      category.resources.forEach(resource => {
        const cardElement = createResourceCard(resource, category.icon);
        resourcesGrid.appendChild(cardElement);
      });
      
      sectionElement.appendChild(resourcesGrid);
      
      // Add back to top link
      const backToTop = document.createElement('a');
      backToTop.classList.add('back-to-top');
      backToTop.href = '#';
      backToTop.innerHTML = '<i class="fas fa-arrow-up"></i> Back to top';
      
      sectionElement.appendChild(backToTop);
      resourcesContainer.appendChild(sectionElement);
    });
  }

  // Create a resource card
  function createResourceCard(resource, categoryIcon) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('resource-card');
    
    // Extract domain from URL for icons or as fallback
    const domain = new URL(resource.url).hostname.replace('www.', '');
    const domainParts = domain.split('.');
    const name = resource.name || domainParts[0];
    
    // Determine icon to use
    let iconClass = categoryIcon; // Default to category icon
    
    // Map common LEGO sites to appropriate icons
    const iconMap = {
      'lego.com': 'fab fa-lego',
      'rebrickable.com': 'fas fa-cubes',
      'bricklink.com': 'fas fa-th',
      'brickset.com': 'fas fa-cube',
      'ideas.lego.com': 'far fa-lightbulb',
      'brothers-brick.com': 'fas fa-newspaper',
      'reddit.com': 'fab fa-reddit',
      'flickr.com': 'fab fa-flickr',
      'youtube.com': 'fab fa-youtube',
      'instagram.com': 'fab fa-instagram',
      'ldraw.org': 'fas fa-drafting-compass',
      'mecabricks.com': 'fas fa-vector-square',
      'brickloot.com': 'fas fa-box',
      'brickeconomy.com': 'fas fa-chart-line',
      'minifigures.com': 'fas fa-child',
      'brickworld.com': 'fas fa-globe',
      'brickfair.com': 'fas fa-ticket-alt'
    };
    
    // Check for domain-specific icons
    for (const [site, icon] of Object.entries(iconMap)) {
      if (domain.includes(site)) {
        iconClass = icon;
        break;
      }
    }
    
    // Check if there's a brand icon for this domain
    if (iconClass === categoryIcon) {
      const brandName = domainParts[0].toLowerCase();
      const commonBrands = ['github', 'gitlab', 'facebook', 'twitter', 'instagram', 'youtube', 'flickr'];
      
      if (commonBrands.includes(brandName)) {
        iconClass = `fab fa-${brandName}`;
      }
    }
    
    // Card content
    cardElement.innerHTML = `
      <h3 class="resource-name">
        <div class="resource-icon-wrapper">
          <i class="${iconClass} resource-icon"></i>
        </div>
        ${name}
      </h3>
      ${resource.description ? `<p class="resource-description">${resource.description}</p>` : ''}
      <a href="${resource.url}" class="resource-link" target="_blank">
        Visit Resource <i class="fas fa-external-link-alt"></i>
      </a>
    `;
    
    return cardElement;
  }
  
  // Filter resources based on search term
  function filterResources(searchTerm) {
    // Reset if search is empty
    if (searchTerm === '') {
      document.querySelectorAll('.category-section, .resource-card').forEach(el => {
        el.style.display = '';
      });
      document.querySelectorAll('.category-item').forEach(el => {
        el.style.display = '';
      });
      return;
    }
    
    // Get all resource sections
    const sections = document.querySelectorAll('.category-section');
    
    sections.forEach(section => {
      let sectionHasMatch = false;
      
      // Check section title
      const sectionTitle = section.querySelector('.category-title').textContent.toLowerCase();
      if (sectionTitle.includes(searchTerm)) {
        sectionHasMatch = true;
      }
      
      // Check resources within the section
      const cards = section.querySelectorAll('.resource-card');
      cards.forEach(card => {
        const resourceText = card.textContent.toLowerCase();
        
        if (resourceText.includes(searchTerm)) {
          card.style.display = '';
          sectionHasMatch = true;
        } else {
          card.style.display = 'none';
        }
      });
      
      // Show/hide the entire section based on matches
      section.style.display = sectionHasMatch ? '' : 'none';
    });
    
    // Update category visibility in sidebar
    updateCategoryVisibility();
  }
  
  // Update category visibility in sidebar based on search
  function updateCategoryVisibility() {
    const categories = document.querySelectorAll('.category-item');
    
    categories.forEach(category => {
      const categoryId = category.getAttribute('data-category');
      const categorySection = document.getElementById(categoryId);
      
      if (categorySection && categorySection.style.display !== 'none') {
        category.style.display = '';
      } else {
        category.style.display = 'none';
      }
    });
  }
  
  // Scroll to a specific category
  function scrollToCategory(categoryId) {
    const element = document.getElementById(categoryId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
});