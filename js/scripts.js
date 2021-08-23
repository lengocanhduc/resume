/*!
* Start Bootstrap - Resume v7.0.3 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
(function() {
  
  var SkillsBar = function( bars ) {
    this.bars = document.querySelectorAll( bars );
    if( this.bars.length > 0 ) {
      this.init();
    } 
  };
  
  SkillsBar.prototype = {
    init: function() {
      var self = this;
      self.index = -1;
      self.timer = setTimeout(function() {
        self.action();
      }, 500);
      
      
    },
    select: function( n ) {
      var self = this,
        bar = self.bars[n];
        
        if( bar ) {
          var width = bar.parentNode.dataset.percent;
        
          bar.style.width = width;
          bar.parentNode.classList.add( "complete" ); 
        }
    },
    action: function() {
      var self = this;
      self.index++;
      if( self.index == self.bars.length ) {
        clearTimeout( self.timer );
      } else {
        self.select( self.index );  
      }
      
      setTimeout(function() {
        self.action();
      },500);
    }
  };
  
  window.SkillsBar = SkillsBar;
  
})();

(function() {
  document.addEventListener( "DOMContentLoaded", function() {
    var skills = new SkillsBar( ".skillbar-bar" );
  });
})();
