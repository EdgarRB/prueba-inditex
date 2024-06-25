const FormatDescription = (description: string) => {
  const urlRegex =
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|]|(\b[\w.-]*\.(com|net|fm)\b[\w/-]*))/gi;

  const descriptionAdapted = description.replace(urlRegex, (url) => {
    const href = url.startsWith('http') ? url : `http://${url}`;
    return `<a href="${href}" target="_blank" class="text-blue-700">${url}</a>`;
  });

  return descriptionAdapted
    .split(/\\n\\n|\\n|\n/)
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join('');
};

export default FormatDescription;
