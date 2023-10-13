import AsyncStorage from "@react-native-async-storage/async-storage"



export async function getFavorites(key) { //PEGA UM FAVORITO POR KEY
    const favorites = await AsyncStorage.getItem(key)
    return JSON.parse(favorites) || [];
}

export async function saveFavorite(key, newItem){ //DEVE RECEBER UMA KEY E O ITEM
    let myFavorites = await getFavorites(key);

    let hasItem = myFavorites.some(item => item.id === newItem.id)

    if (hasItem){
        console.log("Já é favorito")
        return
    }

    myFavorites.push(newItem)

    await AsyncStorage.setItem(key, JSON.stringify(myFavorites))
}

export async function removeItem(id) { //REMOVE O ITEM DOS FAVORITOS PELO ID
    let salvos = await getFavorites("@hackathon")

    let myFavorites = salvos.filter(item => {
        return (item.id !== id)
    })
    await AsyncStorage.setItem("@hackathon", JSON.stringify(myFavorites));
    console.log("Item deletado da lista")
    return myFavorites
}

export async function isFavorite(data) { //VERIFICA SE O ITEM É FAVORITO
    let meusSalvos = await getFavorites("@hackathon")
    const favorite = meusSalvos.find(item => item.id === data.id)
    if (favorite) {
        return true
    }
    return false
}