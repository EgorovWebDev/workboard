jQuery(document).ready(function(){

    // Создание нового участника, создание его копии 
    $(".addP").on('click', function(){
        $(".participants").append(`<li class="item"><div class="name">Новый Участник</div><div class="edit-name"></div> <div class="save-name"></div> <div class="delP"></div></li>`);
        $(".item").draggable({
            connectToSortable: '.task-participants',
            helper: "clone"
        }); 

        
        // Добавление нового участника
         $(".item").each(function(){
            $('.delP').on('click',  function(){
                $(this).parent().remove();
            });
        });

       
   
        
        });
        
        //   Удаляет участника , который был создан заранее
        $(".item").each(function(){
            $(this).on('click', '.delP', function(){
                $(this).parent().remove();
        });
        
    });

    

         //  Добавдение атрибута
         $('.edit-text').click(function(){                
            $('.text').attr('contenteditable', 'true');             
        });
         //  снятие атрибута
        $('.save-text').click(function(){         
            $('.text').removeAttr('contenteditable');          
        });

        
        //  Редактирует Имя участника
        $('.edit-name').click(function(){            
            $('.name').attr('contenteditable', 'true');
            $('.item').draggable({
                disabled: false,
                helper: "original"
            });           
        });
        
        $('.save-name').click(function(){          
            $('.name').removeAttr('contenteditable');
            $('.item').draggable({
                disabled: true,
                helper: "clone",
            });
           
        });




    // Принимает только ".item" в область task-panel, при нажатии удаялет ".item"
    $(".task-panel").droppable({
        accept: ".item",
        drop: function(event,ui){
            $('.task-participants').find(".edit-name").remove();
            $('.task-participants').find(".save-name").remove();

            $('.delP').on('click',  function(){
                $(this).parent().remove();
            });
        },
    });

    // создаёт клона которого можно перенести и закрепить в другой области
    $(function() {
        var transferred = false;
        $('.item').draggable({
            connectToSortable: '.task-participants',
            helper: 'clone',
     
        });
    
        $('.task-participants').sortable({
            receive: function(event, ui)
            {
                transferred = true;
            }
        });
    });
    
    //Создаёт панель с переключением элементов 
    $( ".task-panel" ).tabs();
    
        
});
