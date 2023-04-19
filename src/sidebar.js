const overlay = document.querySelector('#sidebarOverlay')
const sidebar = document.querySelector('aside')
const closeButton = document.querySelector('#closeSidebarButton')
const openButton = document.querySelector('#openSidebarButton')

let isOpen = false

function openSidebar() {
  overlay.style.setProperty('display', 'block')
  overlay.style.setProperty('opacity', '1')

  setTimeout(() => {
    sidebar.style.setProperty('translate', '100%')
  }, 200)

  isOpen = true

  overlay.addEventListener('click', closeSidebar)
  closeButton.addEventListener('click', closeSidebar)
}

function closeSidebar(event) {
  if (event.target !== overlay && event.target !== closeButton) return
  
  sidebar.style.removeProperty('translate')

  setTimeout(() => {
    overlay.style.removeProperty('opacity')
    overlay.style.removeProperty('display')
  }, 200)

  isOpen = false

  overlay.removeEventListener('click', closeSidebar)
  closeButton.removeEventListener('click', closeSidebar)
}

openButton.addEventListener('click', () => {
  if (isOpen) {
    closeSidebar()
  } else {
    openSidebar()
  }
})