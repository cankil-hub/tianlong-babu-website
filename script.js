// Additional interactive features and initializations

// Event delegation for all interactive elements
document.addEventListener('click', function(event) {
    // Handle character card clicks to open modal, even if clicking on card area not just button
    const characterCard = event.target.closest('.character-card');
    if (characterCard) {
        const detailsButton = characterCard.querySelector('.view-details');
        if (detailsButton && !detailsButton.contains(event.target)) { // Check if the click was not on the button itself
            detailsButton.click(); // Trigger the button's click event
        }
    }
});

// Tooltip functionality
function initializeTooltips() {
    const terms = [
        // Martial Arts
        { term: "降龙十八掌", description: "丐帮镇帮绝学，刚猛无比的掌法，威力巨大" },
        { term: "六脉神剑", description: "大理段氏的绝学，能用内力在指尖凝聚剑气射出" },
        { term: "北冥神功", description: "逍遥派的内功心法，能吸取他人内力为己用" },
        { term: "凌波微步", description: "一种轻功身法，步伐玄妙，令人难以捉摸" },
        { term: "斗转星移", description: "姑苏慕容家的绝学，能把对手的力量反弹回去" },
        { term: "天山六阳掌", description: "逍遥派掌法，可化解生死符，威力强大" },
        { term: "天山折梅手", description: "逍遥派招式，号称可化解天下武功" },
        { term: "小无相功", description: "逍遥派内功，能模仿各类武功招式" },
        { term: "化功大法", description: "星宿派丁春秋的邪派武功，能消去他人内力" },
        { term: "生死符", description: "天山童姥的独门暗器，中者奇痒难忍" },
        { term: "易筋经", description: "少林寺镇寺绝学，练成后力大无穷，内力深厚" },
        { term: "火焰刀", description: "鸠摩智的成名绝技，刀光如火，威力强大" }, // Added based on typical TLBB content
        { term: "一阳指", description: "大理段氏家传绝技，以一阳破万阴" },
        { term: "参合指", description: "姑苏慕容家的精妙指法" },
        { term: "打狗棒法", description: "丐帮帮主专用武功，变化多端" },
        { term: "八荒六合唯我独尊功", description: "天山童姥的成名绝技，威力无穷" },

        // Factions
        { term: "丐帮", description: "天下第一大帮，以行侠仗义为宗旨，成员遍布天下" },
        { term: "少林寺", description: "中原武林的泰山北斗，禅宗祖庭，武功博大精深" },
        { term: "逍遥派", description: "隐秘而强大的门派，武功精妙，传人稀少" },
        { term: "灵鹫宫", description: "位于天山缥缈峰，由天山童姥统领，势力强大而神秘" },
        { term: "大理段氏", description: "大理国的统治者，以六脉神剑等武功闻名" },
        { term: "姑苏慕容氏", description: "以\"斗转星移\"闻名，一心复国" }, // Ensuring quotes within descriptions are handled if any
        { term: "星宿派", description: "丁春秋创立的邪派，以毒功和溜须拍马为主要特色" },
        { term: "西夏一品堂", description: "西夏王朝的官方武装组织，代表皇室利益" },
        { term: "无量剑派", description: "分为东西两宗，世代相争，剑法以快取胜" },
        { term: "天龙寺", description: "大理国皇家寺院，与段氏皇族关系密切，武功独特" }, // Added based on typical TLBB content

        // Geography
        { term: "雁门关", description: "宋辽边境的战略要地，乔峰身世之谜的重要发生地" },
        { term: "大理国", description: "段誉的故乡，位于西南边陲的美丽国度" }, // Corrected from just "大理" to "大理国" for consistency if needed
        { term: "嵩山", description: "少林寺所在地，中原名山之一" },
        { term: "少室山", description: "嵩山主峰，是三兄弟大战的地点" },
        { term: "聚贤庄", description: "江湖人士聚会的庄园，乔峰在此以一敌百" },
        { term: "曼陀山庄", description: "王语嫣及其母王夫人所居，风景优美但规矩森严" },
        // { term: "灵鹫宫", description: "虚竹成为灵鹫宫主之地,位于天山缥缈峰" }, // Already covered under Factions
        { term: "无量山", description: "段誉误入神仙姐姐山洞并学得绝世武功之地" },
        { term: "神仙姐姐", description: "段誉在无量山洞中发现的玉像，实为李秋水之妹" }, // Added for clarity from DEVTOOL_LOG
        { term: "琅嬛福地", description: "无量山中的秘洞，藏有逍遥派武学秘籍" }, // Added for completeness
        { term: "聋哑谷", description: "苏星河设珍珑棋局之处，虚竹在此破解棋局" },
        { term: "珍珑棋局", description: "逍遥派掌门无崖子所设的复杂棋局，用以寻找传人" }, // Added
        { term: "小镜湖", description: "阿朱和乔峰约定的地点，也是阿朱遇难之处" },
        { term: "姑苏", description: "慕容家族的所在地，江南水乡" },
        { term: "燕子坞", description: "慕容家族的住所，藏有丰富的武学典籍" },
        { term: "辽国", description: "契丹族建立的政权，乔峰真正的家乡" },
        { term: "西夏", description: "党项族建立的政权，地处西北，沙漠戈壁环境" },
        { term: "天山", description: "西域的神秘高山，灵鹫宫所在地" },
        { term: "缥缈峰", description: "天山上的一个峰，灵鹫宫建在其上" },

        // Other Key Terms
        { term: "契丹人", description: "乔峰的真实民族身份，是辽国的主体民族" },
        { term: "镇南王", description: "段誉的父亲段正淳的爵位" },
        { term: "扫地僧", description: "少林寺藏经阁的隐世高人，武功深不可测" },
        { term: "函谷八友", description: "苏星河的八位弟子，各有所长，居于聋哑谷" },
    ];

    const contentSections = document.querySelectorAll('#story-content, #brotherhood .p-6, .character-card .p-6, #martial-arts-content, #factions-content, #geography-content, #modal-content');

    contentSections.forEach(section => {
        if (!section) return;
        
        let html = section.innerHTML;
        terms.forEach(item => {
            // Regex to match the term as a whole word, avoiding partial matches or matches within HTML tags/attributes.
            // Chinese terms don't have word boundaries like spaces, so this is tricky.
            // This regex tries to avoid matching if the term is part of a larger alphanumeric string (mostly for English terms mixed in)
            // or if it's inside an HTML tag's attribute value.
            // For Chinese, it's more about exact string match.
            const regex = new RegExp(`(?<![\\w>])(${item.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})(?![\\w<])`, 'g');
            html = html.replace(
                regex,
                (match) => `<span class="relative cursor-help border-b border-dotted border-gray-500 group">${match}<span class="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 p-2 bg-gray-800 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">${item.description}</span></span>`
            );
        });
        section.innerHTML = html;
    });
}


// Initialize features when content is loaded
window.addEventListener('load', function() {
    // Initialize tooltips after content has loaded and potentially been modified by markdown rendering
    setTimeout(initializeTooltips, 1500); // Delay ensures dynamic content is likely present

    // Add scroll highlight for active navigation item
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]'); // More specific selector

    function updateActiveNavLink() {
        let currentSectionId = '';
        const scrollBuffer = 100; // Highlight link when section is this many pixels from top

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - scrollBuffer) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('font-bold', 'text-gray-900', 'bg-gray-100', 'active-nav');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('font-bold', 'text-gray-900', 'bg-gray-100', 'active-nav');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Initial call to set active link on page load
    
    // Enhanced content interaction for markdown sections (e.g., collapsible headings)
    // This functionality is not explicitly requested but was in previous script.js logic
    document.querySelectorAll('#martial-arts-content h2, #factions-content h2, #geography-content h2').forEach(heading => {
        // This refers to H2s *within* the markdown content, not the section title H2s from index.html
        // The current CSS already styles markdown H2s. Collapsing functionality might be complex to add robustly here
        // without more specific selectors or structure in the markdown.
        // For now, ensuring they are styled well is the priority.
    });
});

