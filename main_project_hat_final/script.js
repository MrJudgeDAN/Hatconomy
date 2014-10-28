$(function() {
                  var items = getItems();

                  function getItems() {
                    $.ajax({
                            url: "http://backpack.tf/api/IGetSpecialItems/v1/?key=54469df6b98d880a118b46ef&appid=440&compress=1",
                            //key: '54469df6b98d880a118b46ef',
                          //  appid: '440',
                            format: 'json',
                            type: 'GET',
                            //compress: disabled,
                            success: function(data) {
                            //  debugger;
                              console.log(data);
                              doSomething(data);
                                                          },
                            //callback: function(data),

                        });

                        function doSomething(item) {
                          //debugger; //check item when it gets to this point
                          for(var i=0; i<item.response.items.length; i++){
                            var itemGet = item.response.items[i];


                            $('#output').append('<div class="name">' + itemGet.name + '</div>');
                            $('#output').append('<div class="item_class">' + itemGet.item_class + '</div>');
                            $('#output').append('<div class="item_type_name">' + itemGet.item_type_name + '</div>');
                            $('#output').append('<div class="item_quality">' + itemGet.item_quality + '</div>');
                            $('#output').append('<img src=' + itemGet.image_url + '/>');

                          }
                        }
                  }


            /*      var prices = getPrices();        PRICE FOCUS FOR LATER

                  function getPrices() {

                    $.ajax({
                        url: "http://backpack.tf/api/IGetPrices/v4/?key=54469df6b98d880a118b46ef&compress=1",
                        format: "json",
                        type: 'GET',
                        success: function(data) {
                          console.log(data);
                          doSomething(data);
                        },
                    });

                    function doSomething(price) {
                      for(var p=0; p<price.response.prices.length; p++){
                        var priceGet = price.response.prices[p];

                        $('#output').append('<div class="name">' + priceGet.Item_Name + '</div>');
                        $('#output').append('<div class="price">' + priceGet.Priceindex + '</div>');
                      }
                    }

                  }


                });*/





                /* API KEYS

                backpack.tf api = "54469df6b98d880a118b46ef"
                trade.tf api = "3ed4e9bfb55e908cb2f06de13d7710ac"
                steam web api = "A8BFE413CBCB5389095E89B4D3C05E7D"
                Domain Name: http://students.philau.edu/polimeni2274/hatconomy/index.html

                */
