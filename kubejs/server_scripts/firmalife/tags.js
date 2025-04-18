// priority: 0

const registerFirmaLifeItemTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.FIRMALIFE_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })

    // Просто предметы для скрытия
    global.FIRMALIFE_HIDED_ITEMS.forEach(item => {
        event.add('c:hidden_from_recipe_viewers', item)
    })

    event.add('minecraft:trimmable_armor', '#firmalife:beekeeper_armor')
    
    event.add('tfc:foods/usable_in_salad', 'firmalife:food/pickled_egg')

    // Удаление тегов у руд
    event.removeAllTagsFrom("/tfc:ore/[^*]+/[^*]+/")
}

const registerFirmaLifeBlockTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.FIRMALIFE_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })

    // Удаление тегов у руд
    event.removeAllTagsFrom("/tfc:ore/[^*]+/[^*]+/")
}

const registerFirmaLifeFluidTags = (event) => {
    
    // Добавляем тег для скрытия в EMI
    event.add('c:hidden_from_recipe_viewers', 'firmalife:metal/chromium')
}

const registerFirmaLifePlacedFeatures = (event) => {
    event.remove('tfc:in_biome/veins', 'firmalife:vein/normal_chromite')
    event.remove('tfc:in_biome/veins', 'firmalife:vein/deep_chromite')
}
