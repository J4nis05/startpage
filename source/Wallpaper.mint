module Wallpaper {
    fun select() : String {
        let prefix = "background-"
        let total = 277
        let suffix = ".png"
        let num = Random.randint(1, total)
        let imagepath = prefix + String.padStart("#{num}", "0", 3) + suffix
        imagepath
    }

    fun selectName() : String {
        let prefix = "background-"
        let total = 277
        let num = Random.randint(1, total)
        let imagepath = prefix + String.padStart("#{num}", "0", 3)
        imagepath
    }
}
