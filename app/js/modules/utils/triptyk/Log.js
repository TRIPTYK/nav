(function($, w) {
  function TPKLogger() {
    var instance;
    var isLogActive=true;

    function init() {


      function tpk_warn(s) {
        if(isLogActive)return ('console' in self && 'log' in console) ? console.warn(s) : alert(s);
      }

      function tpk_error(s) {
        if(isLogActive) return ('console' in self && 'log' in console) ? console.error(s) : alert(s);
      }

      function tpk_debug(s) {
        if(isLogActive)return ('console' in self && 'log' in console) ? console.info(s) : alert(s);
      }
      function tpk_get_log_active()
      {
        return isLogActive;
      }
      function tpk_set_log_active(b)
      {
        isLogActive=b;
      }

      return {
        error: tpk_error,
        warn: tpk_warn,
        debug: tpk_debug,
        getLogActive : tpk_get_log_active,
        setLogActive : tpk_set_log_active
      };

    }
    return {
      getInstance: function() {

        if (!instance) {
          instance = init();
        }

        return instance;
      }
    };
  }
  w.TPK = w.TPK || {};
  w.TPK.Logger = TPKLogger();
})(jQuery, window);
