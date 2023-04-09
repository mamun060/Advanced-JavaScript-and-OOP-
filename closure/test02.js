//* Global Scope & Parent Scope for all local Scope

function Parent() {
    //* Local Scope & parent scope of localFunc
    console.log('I am child of Global scope & Parent of localFunc')
  
    function Child() {
      //* local Scope & child scope of globalFunc
      console.log('I am child of globalFunc')
    }
  
    Child();
  }
  
  Parent();