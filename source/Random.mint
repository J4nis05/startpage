module Random {
    // Returns a random integer between min and max (inclusive)
    fun randint(min : Number, max : Number) : Number {
        let random = Math.random()
        let num = random * (max - min + 1)
        Math.floor(num) + min
    }
}
