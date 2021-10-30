class Contestant{
    constructor(){
      this.name = null;
      this.index = null;
      this.distance = 0;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(name){
      var playerIndex = "players/player" + playerCount;
      database.ref(playerIndex).set({
        name:this.name,
        distance : this.distance
      });
    }
  
   static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=> {
        all_players = data.val();
      })
    }
  }