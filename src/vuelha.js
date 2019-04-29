const vuelha = new Vue({
  el: "#app",
  data: {
    button: [
      [
        { status: Boolean, click: 0 },
        { status: Boolean, click: 0 },
        { status: Boolean, click: 0 }
      ],
      [
        { status: Boolean, click: 0 },
        { status: Boolean, click: 0 },
        { status: Boolean, click: 0 }
      ],
      [
        { status: Boolean, click: 0 },
        { status: Boolean, click: 0 },
        { status: Boolean, click: 0 }
      ]
    ],
    turno: 1,
    jogadas: 0
  },
  methods: {
    clicked(index, id) {
      if (this.button[index][id].click < 1) {
        this.button[index][id].status = this.turno == 1 ? true : false;
        this.setTurn();
      }
      this.button[index][id].click++;
      speaker();
    },

    setTurn() {
      if (this.turno == 2) {
        this.turno--;
      } else if (this.turno == 1) {
        this.turno++;
      }
      this.jogadas++;
    },

    speaker() {
      this.whoWin(winner => {
        setTimeout(() => {
          let rodada = confirm(
            `${winner == 0 ? "Ninguém" : winner == 1 ? "X" : "O"} venceu!!`
          );
          if (rodada == true || false) window.location.reload();
        }, 500);
      });
    },

    whoWin(callback) {
      if (
        (this.button[0][0].status == true &&
          this.button[0][1].status == true &&
          this.button[0][2].status == true) ||
        (this.button[1][0].status == true &&
          this.button[1][1].status == true &&
          this.button[1][2].status == true) ||
        (this.button[2][0].status == true &&
          this.button[2][1].status == true &&
          this.button[2][2].status == true) ||
        (this.button[0][0].status == true &&
          this.button[1][0].status == true &&
          this.button[2][0].status == true) ||
        (this.button[0][1].status == true &&
          this.button[1][1].status == true &&
          this.button[2][1].status == true) ||
        (this.button[0][0].status == true &&
          this.button[1][1].status == true &&
          this.button[2][2].status == true) ||
        (this.button[0][2].status == true &&
          this.button[1][1].status == true &&
          this.button[2][0].status == true)
      ) {
        callback(1);
      } else if (
        (this.button[0][0].status == false &&
          this.button[0][1].status == false &&
          this.button[0][2].status == false) ||
        (this.button[1][0].status == false &&
          this.button[1][1].status == false &&
          this.button[1][2].status == false) ||
        (this.button[2][0].status == false &&
          this.button[2][1].status == false &&
          this.button[2][2].status == false) ||
        (this.button[0][0].status == false &&
          this.button[1][0].status == false &&
          this.button[2][0].status == false) ||
        (this.button[0][1].status == false &&
          this.button[1][1].status == false &&
          this.button[2][1].status == false) ||
        (this.button[0][2].status == false &&
          this.button[1][2].status == false &&
          this.button[2][2].status == false) ||
        (this.button[0][0].status == false &&
          this.button[1][1].status == false &&
          this.button[2][2].status == false) ||
        (this.button[0][2].status == false &&
          this.button[1][1].status == false &&
          this.button[2][0].status == false)
      ) {
        callback(2);
      } else if (this.jogadas >= 8) {
        callback(0);
      }
    }
  }
});
