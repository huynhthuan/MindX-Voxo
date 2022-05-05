export default function onClickPreventDefault(e) {
    return e.preventDefault();
}

export function getPostCategoryId(slug) {
    switch (slug) {
        case 'business':
            return 43;
        case 'entertainment':
            return 44;
        case 'global':
            return 42;
        case 'health':
            return 46;
        case 'sports':
            return 45;
    }
}
