export const list = (items: Array<any>, options: any): string => {
    const itemsAsHtml = items.map(item => `<li>${ options.fn(item) }</li>`);

    return `<ul>\n${ itemsAsHtml.join('\n') }\n</ul>`;
};
