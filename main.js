// Main JavaScript file for general page functionality

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Close mobile menu when a link is clicked
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe section titles and other important elements
    document.querySelectorAll('section h2, .character-card, #story-content, #brotherhood img').forEach(element => {
        observer.observe(element);
    });
});

// Character modal functionality
const characterModal = document.getElementById('character-modal');
const closeModalButton = document.getElementById('close-modal');

// Close modal when clicking the close button
if (closeModalButton) {
    closeModalButton.addEventListener('click', function() {
        characterModal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
}

// Close modal when clicking outside of it
characterModal.addEventListener('click', function(e) {
    if (e.target === characterModal) {
        characterModal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !characterModal.classList.contains('hidden')) {
        characterModal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
});

// Function to open character modal with specific content
function openCharacterModal(character) {
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    
    modalTitle.textContent = character.name;
    
    // Create modal content
    let content = `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="md:col-span-1">
                <img src="${character.image}" alt="${character.name}" class="w-full h-auto rounded-lg shadow-md">
                <div class="mt-4 bg-gray-100 p-3 rounded-lg">
                    <h4 class="font-bold mb-2">基本信息</h4>
                    <p><span class="font-semibold">称号:</span> ${character.title}</p>
                    <p><span class="font-semibold">主要武功:</span> ${character.skills.join('、')}</p>
                </div>
            </div>
            <div class="md:col-span-2">
                <h4 class="text-xl font-bold mb-3 border-b pb-2">人物背景</h4>
                <p class="mb-4">${character.background}</p>
                
                <h4 class="text-xl font-bold mb-3 border-b pb-2">性格特点</h4>
                <p class="mb-4">${character.personality}</p>
                
                <h4 class="text-xl font-bold mb-3 border-b pb-2">重要关系</h4>
                <ul class="space-y-2">
    `;
    
    // Add relationships
    character.relationships.forEach(rel => {
        content += `<li><span class="font-semibold">${rel.person}:</span> ${rel.connection}</li>`;
    });
    
    content += `
                </ul>
                
                <h4 class="text-xl font-bold mb-3 mt-4 border-b pb-2">在故事中的作用</h4>
                <p>${character.role}</p>
            </div>
        </div>
    `;
    
    modalContent.innerHTML = content;
    characterModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}




