let categories = [{
        id_category: 'animals',
        'parent': "2"
    },
    {
        id_category: 'mammals',
        'parent': 'animals'
    },
    {
        id_category: 'cats',
        'parent': 'mammals'
    },
    {
        id_category: 'dogs',
        'parent': 'mammals'
    },
    {
        id_category: 'chihuahua',
        'parent': 'dogs'
    },
    {
        id_category: 'labrador',
        'parent': 'dogs'
    },
    {
        id_category: 'persian',
        'parent': 'cats'
    },
    {
        id_category: 'siamese',
        'parent': 'cats'
    },
]



let makeTree = (categories, parent) => {
    let node = {}
    categories
        .filter(c => c.parent === parent)
        .forEach(c => node[c.id_category] =
            makeTree(categories, c.id_category))
    return node
}


console.log(
    JSON.stringify(
        makeTree(categories, "2"), null, 2)
);