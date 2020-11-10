module.exports = text => { 
    const replacements = {'<': '&lt;', '>': '&gt;','&': '&amp;', '"': '&quot;'}; 
    
    return text.replace(/[<>&"]/g, character => replacements[character]); 
}