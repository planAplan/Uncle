import { observable, action } from "mobx";

class body {
    id = Math.random();
    @observable title = "";
    @observable finished = false;
    @action
}

export default new body()