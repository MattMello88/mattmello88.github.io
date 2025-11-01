// Navegação entre arquivos e conteúdo
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== GERENCIAMENTO DE TABS ==========
    const tabsBar = document.querySelector('.tabs-bar');
    let openTabs = new Map(); // Map para rastrear tabs abertas
    
    // Função para criar uma nova tab
    function createTab(contentId, fileName, icon = 'fa-file-alt') {
        // Verificar se a tab já está aberta
        if (openTabs.has(contentId)) {
            // Se já existe, apenas ativa ela
            switchToTab(contentId);
            return;
        }
        
        // Criar nova tab
        const tab = document.createElement('div');
        tab.className = 'tab';
        tab.setAttribute('data-content', contentId);
        
        // Mapear nomes de arquivo
        const fileNames = {
            'about': 'README.md',
            'projects': 'projetos.md',
            'projects-web': 'web-apps.md',
            'experience': 'experiencia.md',
            'ai': 'ia.md',
            'certifications': 'certificacoes.md',
            'contact': 'contato.md'
        };
        
        const icons = {
            'about': 'fa-file-alt',
            'projects': 'fa-code',
            'projects-web': 'fa-globe',
            'experience': 'fa-briefcase',
            'ai': 'fa-robot',
            'certifications': 'fa-certificate',
            'contact': 'fa-envelope'
        };
        
        tab.innerHTML = `
            <i class="fas ${icons[contentId] || icon}"></i>
            <span>${fileNames[contentId] || fileName}</span>
            <i class="fas fa-times close-tab"></i>
        `;
        
        // Adicionar evento de clique na tab
        tab.addEventListener('click', function(e) {
            if (e.target.classList.contains('close-tab') || e.target.closest('.close-tab')) {
                e.stopPropagation();
                closeTab(contentId);
            } else {
                switchToTab(contentId);
            }
        });
        
        tabsBar.appendChild(tab);
        openTabs.set(contentId, tab);
        switchToTab(contentId);
    }
    
    // Função para alternar para uma tab
    function switchToTab(contentId) {
        // Desativar todas as tabs
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Desativar todo conteúdo
        document.querySelectorAll('.content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Ativar tab selecionada
        const tab = document.querySelector(`.tab[data-content="${contentId}"]`);
        if (tab) {
            tab.classList.add('active');
        }
        
        // Ativar conteúdo correspondente
        const content = document.getElementById(`${contentId}-content`);
        if (content) {
            content.classList.add('active');
        }
    }
    
    // Função para fechar uma tab
    function closeTab(contentId) {
        const tab = openTabs.get(contentId);
        if (tab) {
            tab.remove();
            openTabs.delete(contentId);
            
            // Se a tab fechada estava ativa, ativar outra
            if (tab.classList.contains('active')) {
                const remainingTabs = Array.from(openTabs.values());
                if (remainingTabs.length > 0) {
                    const lastTab = remainingTabs[remainingTabs.length - 1];
                    switchToTab(lastTab.getAttribute('data-content'));
                } else {
                    // Se não há mais tabs, mostrar conteúdo vazio ou abrir README
                    createTab('about', 'README.md');
                }
            }
        }
    }
    
    // ========== NAVEGAÇÃO DE ARQUIVOS ==========
    const fileItems = document.querySelectorAll('.file');
    fileItems.forEach(file => {
        file.addEventListener('click', function() {
            // Remover active de todos os arquivos
            document.querySelectorAll('.file').forEach(f => {
                f.classList.remove('active');
            });
            
            // Adicionar active ao arquivo clicado
            this.classList.add('active');
            
            // Obter o contentId do atributo data-content
            const contentId = this.getAttribute('data-content');
            
            // Criar/ativar tab correspondente
            createTab(contentId, this.querySelector('span').textContent);
        });
    });
    
    // ========== FOLDERS (PASTAS) ==========
    const folderToggles = document.querySelectorAll('.folder-toggle');
    folderToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const folder = this.closest('.folder');
            const folderContent = folder.querySelector('.folder-content');
            const chevron = this.querySelector('.fa-chevron-right, .fa-chevron-down');
            const folderIcon = this.querySelector('.fa-folder, .fa-folder-open');
            
            // Toggle do estado
            if (folderContent.classList.contains('active')) {
                folderContent.classList.remove('active');
                chevron.classList.remove('fa-chevron-down');
                chevron.classList.add('fa-chevron-right');
                if (folderIcon) {
                    folderIcon.classList.remove('fa-folder-open');
                    folderIcon.classList.add('fa-folder');
                }
            } else {
                folderContent.classList.add('active');
                chevron.classList.remove('fa-chevron-right');
                chevron.classList.add('fa-chevron-down');
                if (folderIcon) {
                    folderIcon.classList.remove('fa-folder');
                    folderIcon.classList.add('fa-folder-open');
                }
            }
        });
    });
    
    // ========== ACTIVITY BAR ==========
    const activityIcons = document.querySelectorAll('.activity-icon');
    activityIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            // Remover active de todos
            activityIcons.forEach(i => i.classList.remove('active'));
            
            // Adicionar active ao clicado
            this.classList.add('active');
            
            const section = this.getAttribute('data-section');
            
            // Aqui você pode adicionar lógica para mostrar diferentes painéis
            // Por enquanto, apenas o explorer está implementado
            if (section === 'explorer') {
                document.getElementById('explorer-panel').style.display = 'flex';
            }
        });
    });
    
    // ========== CHAT FUNCTIONALITY ==========
    const chatInput = document.getElementById('chat-input');
    const chatSendBtn = document.getElementById('chat-send');
    const chatMessages = document.getElementById('chat-messages');
    const chatWelcome = document.querySelector('.chat-welcome');
    
    // Respostas simuladas da IA
    const aiResponses = [
        "Olá! Como posso ajudá-lo hoje?",
        "Que interessante! Conte-me mais sobre isso.",
        "Entendi. Vou analisar essa informação.",
        "Essa é uma ótima pergunta! Deixe-me pensar...",
        "Obrigado pela informação. Isso é muito útil!"
    ];
    
    function addChatMessage(text, isUser = false) {
        // Ocultar welcome se houver mensagens
        if (chatWelcome && chatMessages.children.length === 0) {
            chatWelcome.style.display = 'none';
            chatMessages.classList.add('active');
        }
        
        const message = document.createElement('div');
        message.className = `chat-message ${isUser ? 'user' : 'assistant'}`;
        message.textContent = text;
        
        chatMessages.appendChild(message);
        
        // Scroll para a última mensagem
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Se for mensagem do usuário, simular resposta da IA após delay
        if (isUser) {
            setTimeout(() => {
                const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
                addChatMessage(randomResponse, false);
            }, 1000);
        }
    }
    
    function sendChatMessage() {
        const message = chatInput.value.trim();
        if (message) {
            addChatMessage(message, true);
            chatInput.value = '';
        }
    }
    
    chatSendBtn.addEventListener('click', sendChatMessage);
    
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });
    
    // Botão de ação do chat
    const chatActionButton = document.querySelector('.chat-action-button');
    if (chatActionButton) {
        chatActionButton.addEventListener('click', function() {
            const message = "Olá! Gostaria de saber mais sobre seu trabalho e projetos. Pode me dar uma visão geral?";
            addChatMessage(message, true);
        });
    }
    
    // ========== MOBILE MENU ==========
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar');
    const sidebar = document.getElementById('explorer-panel');
    const mobileOverlay = document.getElementById('mobile-overlay');
    
    function openMobileMenu() {
        sidebar.classList.add('active');
        mobileOverlay.classList.add('active');
        mobileMenuBtn.classList.add('active');
        mobileMenuBtn.querySelector('i').classList.remove('fa-bars');
        mobileMenuBtn.querySelector('i').classList.add('fa-times');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMobileMenu() {
        sidebar.classList.remove('active');
        mobileOverlay.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        document.body.style.overflow = '';
    }
    
    // Abrir menu mobile
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (sidebar.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }
    
    // Fechar menu ao clicar no overlay
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', closeMobileMenu);
    }
    
    // Fechar menu ao clicar no botão de fechar
    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', closeMobileMenu);
    }
    
    // Fechar menu ao clicar em um arquivo (mobile)
    fileItems.forEach(file => {
        file.addEventListener('click', function() {
            // Fechar menu mobile se estiver aberto
            if (window.innerWidth <= 768 && sidebar.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    });
    
    // Fechar menu ao redimensionar para desktop
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        }, 250);
    });
    
    // ========== INICIALIZAÇÃO ==========
    // Ativar o primeiro arquivo por padrão
    const firstFile = document.querySelector('.file[data-content="about"]');
    if (firstFile) {
        firstFile.click();
    }
    
    // Adicionar animação suave ao carregar
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s';
        document.body.style.opacity = '1';
    }, 100);
    
});

