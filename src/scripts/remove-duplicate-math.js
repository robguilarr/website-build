/**
 * Client-side script to remove duplicate raw LaTeX text
 * This runs after page load to clean up any remaining duplicates
 */
(function() {
  function removeDuplicateMath() {
    // Find all katex-display elements
    const katexDisplays = document.querySelectorAll('.katex-display');
    
    katexDisplays.forEach((katexEl) => {
      // Check siblings
      const parent = katexEl.parentElement;
      if (!parent) return;
      
      // Check previous sibling
      let prevSibling = katexEl.previousElementSibling;
      if (prevSibling && containsRawLaTeX(prevSibling)) {
        prevSibling.remove();
      }
      
      // Check next sibling
      let nextSibling = katexEl.nextElementSibling;
      if (nextSibling && containsRawLaTeX(nextSibling)) {
        nextSibling.remove();
      }
      
      // Also check text nodes in the parent
      const walker = document.createTreeWalker(
        parent,
        NodeFilter.SHOW_TEXT,
        null
      );
      
      let textNode;
      while (textNode = walker.nextNode()) {
        if (containsRawLaTeXText(textNode.textContent)) {
          textNode.remove();
        }
      }
    });
  }
  
  function containsRawLaTeX(element) {
    if (!element) return false;
    const text = element.textContent || '';
    return (
      text.includes('$$') ||
      (text.includes('\\frac') && text.includes('S =')) ||
      (text.includes('\\') && text.match(/\\[a-zA-Z]+\{/))
    );
  }
  
  function containsRawLaTeXText(text) {
    if (!text || text.trim().length === 0) return false;
    const normalized = text.trim();
    return (
      normalized.includes('$$') ||
      (normalized.includes('\\frac') && normalized.includes('S ='))
    );
  }
  
  // Run after DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', removeDuplicateMath);
  } else {
    removeDuplicateMath();
  }
  
  // Also run after a short delay to catch dynamically loaded content
  setTimeout(removeDuplicateMath, 100);
})();

