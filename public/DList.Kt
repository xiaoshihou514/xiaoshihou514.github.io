package org.example

import kotlin.time.measureTime

fun buildBuiltinImmutableList(): List<Int> {
    var xs = listOf<Int>();
    for (i in 0..10000) {
        xs += i
    }
    return xs
}

fun buildBuiltinMutableList(): List<Int> {
    val xs = mutableListOf<Int>();
    for (i in 0..10000) {
        xs.add(i)
    }
    return xs
}

sealed interface LinkedList
data class Cons(val head: Int, val tail: LinkedList) : LinkedList
object Nil : LinkedList

infix fun Int.cons(xs: LinkedList) = Cons(this, xs)
infix fun LinkedList.snoc(x: Int): LinkedList = when (this) {
    is Nil -> Cons(x, Nil)
    is Cons -> Cons(head, tail snoc x)
}

fun buildImmutableList(): LinkedList {
    var xs: LinkedList = Nil
    for (i in 0..10000) {
        xs = i cons xs
    }
    return xs
}

fun buildImmutableListSnoc(): LinkedList {
    var xs: LinkedList = Nil
    for (i in 0..10000) {
        xs = xs snoc i
    }
    return xs
}

tailrec fun LinkedList.find(pred: (Int) -> Boolean): Int? = when (this) {
    is Nil -> null
    is Cons -> if (pred(this.head)) head else tail.find(pred)
}

fun compose(
    f: (LinkedList) -> LinkedList,
    g: (LinkedList) -> LinkedList
): (LinkedList) -> LinkedList = { xs -> f(g(xs)) }

data class DList(val f: (LinkedList) -> LinkedList)
val DNil = DList({ it })

infix fun Int.cons(xs: DList) = DList(compose({ this cons it}, xs.f))
infix fun DList.append(other: DList): DList = DList(compose(f, other.f))
infix fun DList.snoc(x: Int): DList = this append (x cons DNil)
fun DList.find(pred: (Int) -> Boolean): Int? = f(Nil).find(pred)

fun buildDList(): DList {
    var xs: DList = DNil
    for (i in 0..10000) {
        xs = i cons xs
    }
    return xs
}

fun buildDListSnoc(): DList {
    var xs: DList = DNil
    for (i in 0..10000) {
        xs = xs snoc i
    }
    return xs
}

fun main() {
    val timeToBuildBuiltinImmutableList = measureTime {
        buildBuiltinImmutableList()
    }
    val timeToBuildBuiltinMutableList = measureTime {
        buildBuiltinMutableList()
    }
    val timeToBuildImmutableList = measureTime {
        buildImmutableList()
    }
    val timeToBuildImmutableListSnoc = measureTime {
        buildImmutableListSnoc()
    }
    val timeToBuildDList = measureTime {
        buildDList()
    }
    val timeToBuildDListSnoc = measureTime {
        buildDListSnoc()
    }
    println("Building builtin immutable list takes $timeToBuildBuiltinImmutableList")
    println("Building builtin mutable list takes $timeToBuildBuiltinMutableList")
    println("Building immutable list takes $timeToBuildImmutableList")
    println("Building immutable list (snoc) takes $timeToBuildImmutableListSnoc")
    println("Building dlist takes $timeToBuildDList")
    println("Building dlist (snoc) takes $timeToBuildDListSnoc")

    val builtinImmutableList = buildBuiltinImmutableList()
    val builtinMutableList = buildBuiltinMutableList()
    val immutableList = buildImmutableList()
    val dlist = buildDList()

    val timeToQueryBuiltinImmutableList = measureTime {
        builtinImmutableList.find { it == 99999 }
    }
    val timeToQueryBuiltinMutableList = measureTime {
        builtinMutableList.find { it == 99999 }
    }
    val timeToQueryImmutableList = measureTime {
        immutableList.find { it == 99999 }
    }
    val timeToQueryDList = measureTime {
        dlist.find { it == 99999 }
    }
    println("Traversing builtin immutable list takes $timeToQueryBuiltinImmutableList")
    println("Traversing a builtin immutable list takes $timeToQueryBuiltinMutableList")
    println("Traversing immutable list takes $timeToQueryImmutableList")
    println("Traversing dlist takes $timeToQueryDList")
}
