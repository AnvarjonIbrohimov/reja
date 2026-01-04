
/*
C-TASK

Shunday function tuzing, u 2ta string parametr ega bolsin, 
hamda agar har ikkala string bir hil harflardan iborat bolsa true 
aks holda false qaytarsin. MASALAN checkContent("mitgroup", "gmtiprou")
return qiladi true.
*/
function checkContent(a, b){
    let c = [...a.toLowerCase()].sort().join("")
    let d = [...b.toLowerCase()].sort().join("")
    console.log(c===d);
    
    
}
checkContent("mitgrOup", "Gmtiprou")
checkContent("Anvarjon", "nojranva")
checkContent("54551002433", "01023435554")
