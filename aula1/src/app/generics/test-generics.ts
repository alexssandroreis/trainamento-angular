export class TestGenerics<T> {

    public test(t: T): T {
        return t;
    }

    public test2<K>(k: K): K {
        return k;
    }

}