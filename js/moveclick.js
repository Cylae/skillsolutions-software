$(function()
  {
      var expanded = false;
      $('#sidebar').click(function()
                          {
                              if (!expanded)
                              {
                                  $(this).animate({'left' : '0px'}, {duration : 400});
                                  expanded = true;
                              }
                              else
                              {
                                 $(this).animate({'left' : '565px'}, {duration: 400});
                                  expanded = false;
                              }
                          });
  });