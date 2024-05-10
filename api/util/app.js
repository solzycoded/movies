const createPopulateVal = (collection, collectionFields, target, targetFields) => {
    return {
        path: collection,
        populate: { 
            path: target,
            select: targetFields
        },
        select: collectionFields
    }
}

const App = {
    createPopulateVal
}

export default App;