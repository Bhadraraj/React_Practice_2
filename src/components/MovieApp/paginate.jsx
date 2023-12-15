import _ from 'lodash';
function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    console.log(`Start Index :${startIndex}`)
    console.log(`My Items :${items}`)
    console.log(`My Page Number  :${pageNumber}`)
    return _(items).slice(startIndex).take(pageSize).value();
}

export default paginate;
