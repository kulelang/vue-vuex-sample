<template>
  <!-- App -->
  <div id="app">
    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>
    <!-- Right Panel -->
    <f7-panel right cover layout="dark">
      <f7-view id="right-panel-view" navbar-through :dynamic-navbar="true">
        <f7-navbar v-if="$theme.ios" title="Right Panel" sliding></f7-navbar>
        <f7-pages>
          <f7-page>
            <f7-navbar v-if="$theme.material" title="Right Panel" sliding></f7-navbar>
            <f7-block>
              <p>Right panel content goes here</p>
            </f7-block>
            <f7-block-title>Load page in panel</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About"></f7-list-item>
              <f7-list-item link="/form/" title="Form"></f7-list-item>
            </f7-list>
            <f7-block-title>Load page in main view</f7-block-title>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- iOS Theme Navbar -->
        <!-- Pages -->
        <f7-pages>
          <f7-page>
            <!-- Material Theme Navbar -->
            <f7-navbar v-if="$theme.material">
              <f7-nav-center sliding>Todo Apps</f7-nav-center>
              <f7-nav-right>
                <f7-link icon="icon-bars" open-panel="right"></f7-link>
              </f7-nav-right>
            </f7-navbar>
            
            <f7-block>
              <f7-list>
                <f7-list-item>
                  <f7-input v-on:keypress="addTodos" v-model="newTitle" type="text" placeholder="Add todos"></f7-input>
                </f7-list-item>
              </f7-list>
              <f7-button v-on:click="addTodos" color="blue" fill>Add Todo</f7-button>
            </f7-block>

            <f7-list>
              <f7-list-item v-for="todo in todos" :key="todo.title" :title="todo.title">
              <f7-button>Remove</f7-button>  
              </f7-list-item>
            </f7-list>           
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
  </div>
</template>

<script>

import store from './store'



export default {
    data(){
      return {
        newTitle:'',
        todos : store.getters.getTodos
      }
    },
    methods : {
        async addTodos(e){
          if(e && e.type === 'keypress' && e.keycode === 13 || e.type === 'click'){
            window.f7.showPreloader()
            await store.dispatch('addTodos', { title : this.newTitle } )
            window.f7.hidePreloader()
          }
        }
    }
}
</script>