import React from "react";
import {inject, observer} from "mobx-react";
import List from "./List";

const ListContainer = inject("store")(observer(({store})=><List store={store}/>));

export default ListContainer;