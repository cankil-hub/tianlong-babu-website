// Function to load and process Markdown content from a given file and display it in a target element
async function loadMarkdownContent(filePath, targetElementId, title = null) {
    try {
        // 尝试使用不同的方式获取文件内容
        let response;
        let mdContent;
        
        try {
            // 首先尝试直接fetch
            response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            mdContent = await response.text();
        } catch (fetchError) {
            console.warn(`Direct fetch failed for ${filePath}:`, fetchError);
            
            // 如果直接fetch失败，尝试添加缓存破坏参数
            try {
                const cacheBuster = '?v=' + Date.now();
                response = await fetch(filePath + cacheBuster);
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                mdContent = await response.text();
            } catch (secondError) {
                console.warn(`Cache-buster fetch also failed for ${filePath}:`, secondError);
                
                // 最后尝试从静态内容获取
                if (typeof getStaticContent === 'function') {
                    const staticContent = getStaticContent(filePath);
                    if (staticContent) {
                        console.log(`Using static content for ${filePath}`);
                        mdContent = staticContent;
                    } else {
                        console.error(`No static content available for ${filePath}`);
                        throw new Error(`Unable to load ${filePath} from any source`);
                    }
                } else {
                    console.error(`Static content function not available for ${filePath}`);
                    throw new Error(`Unable to load ${filePath}`);
                }
            }
        }

        // Find the separator between YAML front matter and Markdown content
        const firstSeparator = mdContent.indexOf('---');
        const secondSeparator = mdContent.indexOf('---', firstSeparator + 3);

        let markdownString;
        let metadata = {};

        if (firstSeparator === 0 && secondSeparator > 0) {
            // 有YAML前置内容
            const yamlString = mdContent.slice(firstSeparator + 3, secondSeparator).trim();
            markdownString = mdContent.slice(secondSeparator + 3).trim();
            
            try {
                metadata = jsyaml.load(yamlString) || {};
            } catch (yamlError) {
                console.warn('YAML parsing failed:', yamlError);
                metadata = {};
            }
        } else {
            // 没有YAML前置内容，直接使用整个内容作为markdown
            markdownString = mdContent.trim();
        }

        // Configure marked.js to handle HTML properly
        marked.setOptions({
            breaks: true,
            gfm: true,
            sanitize: false,
            smartLists: true,
            smartypants: false
        });

        // Parse Markdown to get HTML
        const htmlContent = marked.parse(markdownString);

        // Display content in the target section
        const targetContainer = document.getElementById(targetElementId);
        if (targetContainer) {
            targetContainer.innerHTML = `
                ${title ? `<h3 class="text-2xl font-bold mb-4">${title}</h3>` : ''}
                <div class="markdown-content">
                    ${htmlContent}
                </div>
            `;

            // Add fade-in class, will be picked up by IntersectionObserver if enabled
            targetContainer.classList.add('fade-in');
            
            // Force image reload to prevent display issues
            setTimeout(() => {
                const images = targetContainer.querySelectorAll('img');
                images.forEach(img => {
                    if (img.src) {
                        const src = img.src;
                        img.src = '';
                        setTimeout(() => {
                            img.src = src;
                        }, 10);
                    }
                });
            }, 100);
        }

    } catch (error) {
        console.error(`Error loading content from ${filePath}:`, error);
        const targetContainer = document.getElementById(targetElementId);
        if (targetContainer) {
            targetContainer.innerHTML = `
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    <p>加载内容时出错，请稍后再试。错误详情: ${error.message}</p>
                    <p class="text-sm mt-2">正在尝试重新加载...</p>
                </div>
            `;
            
            // 3秒后重试一次
            setTimeout(() => {
                loadMarkdownContent(filePath, targetElementId, title);
            }, 3000);
        }
    }
}


// Load content when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Load existing story content
    loadMarkdownContent('storyContent.md', 'story-content');

    // Characters data is loaded via characters.js, only the markdown source is present here
    // loadCharacterContent(); // No need to load this into a container directly on the page based on current HTML

    // Load new sections for武功, 门派/势力, and 地理位置
    loadMarkdownContent('martialArts.md', 'martial-arts-content');
    loadMarkdownContent('factions.md', 'factions-content');
    loadMarkdownContent('geography.md', 'geography-content');

    // Add event listeners for section navigation to ensure smooth loading
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            // Get the target section id
            const targetId = this.getAttribute('href').substring(1);
            
            // If it's one of our markdown content sections, ensure content is properly loaded
            if(['martial-arts', 'factions', 'geography'].includes(targetId)) {
                const contentElement = document.getElementById(`${targetId}-content`);
                
                // If the content is still showing the loading placeholder, retry loading
                if(contentElement && contentElement.querySelector('.animate-pulse')) {
                    const mdFile = targetId === 'martial-arts' ? 'martialArts.md' : 
                                  targetId === 'factions' ? 'factions.md' : 'geography.md';
                    
                    loadMarkdownContent(mdFile, `${targetId}-content`);
                }
            }
        });
    });
});



