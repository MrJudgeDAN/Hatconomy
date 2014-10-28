$(function() {
                  var item = getItems();

                  function getItems() {
                    $.ajax({
                            url: "http://backpack.tf/api/IGetSpecialItems/v1/?key=54469df6b98d880a118b46ef&appid=440&compress=1",
                            dataType: 'json',
                            type: 'GET',
                            success: function (items) {
                                doSomething(items);
                            },

                        });

                        function doSomething(item) {
                          for(var i=0; i<item.length;i++){
                            var group = "<div class='info'>"; // Must be in loop or else more than one repeated set
                            var itemGet = items[i];


                            group += ('<div class="name">' + itemGet.name + '</div>');



                          /*  group += ('<div class ="index">' + person.index + '</div>'); // Refer to Index Number if repeat or if lost
                            group += ('<div class ="name">' + person.name + '</div>');
                            group += ('<div class ="age">' + person.age + '</div>');
                            group += ('<div class ="gender">' + person.gender + '</div>');
                            group += ('<div class ="eye-color">' + person.eyeColor + '</div>');
                            group += ('<div class ="balance">' + person.balance + '</div>');
                            group += ('<div class ="company">' + person.company + '</div>');
                            group += ('<div class ="address">' + person.address + '</div>');
                            group += ('<div class ="_id">' + person._id + '</div>');


                              var friends = person.friends; // MUST BE REFERED TO AS PERSON HERE, NOT people.friends
                              for(var f=0; f<friends.length; f++){ //change i to any letter to refer to create in-loop
                                var friend = friends[f];
                                //friendName = '<div class="box">' + friends.name + "</div>";
                                group += ('<div class = "friend">' + friend.name + '</div>');
                              }
                            group += ('<div class ="greeting">' + person.greeting + '</div>');
                            group += ('<img src=' + person.picture + '/>');
                            group += '</div>';

                            $('#example').append(group);*/

                          }
                        }
                  }
                });
