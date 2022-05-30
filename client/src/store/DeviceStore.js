import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1,name: "kfdokd"},
            {id: 2,name: "llflll"},
            {id: 3,name: "fdjsi"}
        ]
        this._brands = [{id: 1,name: "kfdokd"},{id: 2,name: "kfdokd"},{id: 3,name: "kfdokd"}]
        this._devices = [{id: 1,name: "kfdokd"}, {id: 2,name: "kfdokd"}, {id: 3,name: "kfdokd"}, {id: 4,name: "kfdokd"}, {id: 5,name: "kfdokd"}, {id: 6,name: "kfdokd"}]
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}