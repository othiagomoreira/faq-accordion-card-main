const accordionItems = document.querySelectorAll('.accordion__item');
const icon = document.querySelector('.accordion__header i');

accordionItems.forEach(item =>  {
  const accordionHeader = item.querySelector('.accordion__header');

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open');
    
    toggleItem(item)

    // Quando selecionar um accordionHeader, feche o outro
    if(openItem && openItem!== item) {
      toggleItem(openItem)
    }
  })
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.accordion__content'); //
  
  if(item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style');
    item.classList.remove('accordion-open');
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px';
    item.classList.add('accordion-open');
  }
}