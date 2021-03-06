import './App.css';
import React from "react";
import $ from "jquery";
import Modernizr from "modernizr";
import Skill from "./Skill"
import Navigation from "./Navigation";
import Cube from "./Cube";
import Home from "./Home";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Work from "./Work";

$(function() {
  $( '#sb-container' ).swatchbook();
});

( function(window, undefined ) {
  $.fn.reverse = [].reverse;

  $.SwatchBook = function( options, element ) {
    this.$el = $( element );
    this._init( options );
  };

  $.SwatchBook.defaults = {
    center : 6,
    angleInc : 8,
    speed : 700,
    easing : 'ease',
    proximity : 45,
    neighbor : 4,
    onLoadAnim : true,
    initclosed : false,
    closeIdx : -1,
    openAt : -1
  };

  $.SwatchBook.prototype	= {

    _init : function( options ) {
      this.options = $.extend( true, {}, $.SwatchBook.defaults, options );
      this.$items = this.$el.children( 'div' );
      this.itemsCount = this.$items.length;
      this.current = -1;
      this.support = Modernizr.csstransitions;
      this.cache = [];

      if( this.options.onLoadAnim ) {
        this._setTransition();
      }

      if( !this.options.initclosed ) {
        this._center( this.options.center, this.options.onLoadAnim );
      }
      else {

        this.isClosed = true;
        if( !this.options.onLoadAnim ) {
          this._setTransition();
        }

      }

      if( this.options.openAt >= 0 && this.options.openAt < this.itemsCount ) {
        this._openItem( this.$items.eq( this.options.openAt ) );
      }

      this._initEvents();

    },
    _setTransition : function() {

      if( this.support ) {
        this.$items.css( { 'transition': 'all ' + this.options.speed + 'ms ' + this.options.easing } );
      }

    },
    _openclose : function() {

      this.isClosed ? this._center( this.options.center, true ) : this.$items.css( { 'transform' : 'rotate(0deg)' } );
      this.isClosed = !this.isClosed;

    },
    _center : function( idx, anim ) {

      var self = this;

      this.$items.each( function( i ) {

        var transformStr = 'rotate(' + ( self.options.angleInc * ( i - idx ) ) + 'deg)';
        $( this ).css( { 'transform' : transformStr } );

      } );

    },
    _openItem : function( $item ) {

      var itmIdx = $item.index();

      if( itmIdx !== this.current ) {

        if( this.options.closeIdx !== -1 && itmIdx === this.options.closeIdx ) {

          this._openclose();
          this._setCurrent();

        }
        else {

          this._setCurrent( $item );
          $item.css( { 'transform' : 'rotate(0deg)' } );
          this._rotateSiblings( $item );

        }

      }

    },
    _initEvents : function() {

      var self = this;

      this.$items.on( 'click.swatchbook', function( event ) {
        self._openItem( $( this ) );
      } );

    },
    _rotateSiblings : function( $item ) {

      var self = this,
          idx = $item.index(),
          $cached = this.cache[ idx ],
          $siblings;

      if( $cached ) {
        $siblings = $cached;
      }
      else {

        $siblings = $item.siblings();
        this.cache[ idx ] = $siblings;

      }

      $siblings.each( function( i ) {

        var rotateVal = i < idx ?
            self.options.angleInc * ( i - idx ) :
            i - idx === 1 ?
                self.options.proximity :
                self.options.proximity + ( i - idx - 1 ) * self.options.neighbor;

        var transformStr = 'rotate(' + rotateVal + 'deg)';

        $( this ).css( { 'transform' : transformStr } );

      } );

    },
    _setCurrent : function( $el ) {

      this.current = $el ? $el.index() : -1;
      this.$items.removeClass( 'ff-active' );
      if( $el ) {
        $el.addClass( 'ff-active' );
      }

    }

  };

  var logError = function( message ) {
    if ( window.console ) {
      window.console.error( message );
    }
  };

  $.fn.swatchbook = function( options ) {

    let instance = $.data(this, 'swatchbook');

    if ( typeof options === 'string' ) {

      var args = Array.prototype.slice.call( arguments, 1 );

      this.each(function() {

        if ( !instance ) {

          logError( "cannot call methods on swatchbook prior to initialization; " +
              "attempted to call method '" + options + "'" );
          return;

        }

        if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {

          logError( "no such method '" + options + "' for swatchbook instance" );
          return;

        }

        instance[ options ].apply( instance, args );

      });

    }
    else {

      this.each(function() {

        if ( instance ) {

          instance._init();

        }
        else {

          instance = $.data( this, 'swatchbook', new $.SwatchBook( options, this ) );

        }

      });
    }
    return instance;
  };

} )( window );

export default function App() {
  return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navigation />
          {/*<hr />*/}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <Skill />
            </Route>
            <Route path="/skill">
              <Cube />
            </Route>
            <Route path="/projects">
              {/*<Work />*/}
            </Route>
          </Switch>
          </header>
        </div>
      </Router>
  );
}

// export default App;
