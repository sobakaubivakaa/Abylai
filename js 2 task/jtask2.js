    const preg = document.querySelector('p');
    preg.innerHTML = preg.innerText.
    split(' ').map(word => word.length > 8 ? `<span style="background:yellow">${word}</span>` : word).join(' ');
    const link = document.createElement('a');
    link.href = 'https://www.inc.com/';
    link.innerText = 'Push';
    document.body.appendChild(link);
     preg.innerHTML = preg.innerHTML
    .split(/\.[^\.|<]/)
    .join('.</p><p>') + '</p>' ;
    const wordCount = preg.innerText.split(' ').length;
    const wordCountElem = document.createElement('div');
    wordCountElem.innerText = `${wordCount} words`;
    document.body.insertBefore(wordCountElem, preg);
    preg.innerText = preg.innerText
    .split('')
    .map((word) => {
    if (word == '?') {
    return  word = '🤔';
} else if (word == '!') {
    return  word = '😲';
}else{
    return  word
}
})
    .join('');
