const { createApp } = Vue

createApp({
    data() {
        return {
            activeContact: 0, //indice per indicare il contatto attivo
            newMessage: '', // stringa che conterrà il nuovo messaggio
            searchKey: '', // stringa per filtrare le chat
            contacts: [
                {
                    name: 'Michele',
                    avatar: '../img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: "../img/avatar_2.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: "../img/avatar_3.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: "../img/avatar_4.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: "../img/avatar_5.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: "../img/avatar_5.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: "../img/avatar_7.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: "../img/avatar_8.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Antonio',
                    avatar: "../img/avatar_2.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare il sushi?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'va bene',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Macelleria',
                    avatar: "../img/avatar_2.jpg",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, avete ancora delle fiorentine?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'si da 1.5 kg e da 2 kg',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK allora prendo quella da due kg!!',
                            status: 'sent'
                        }
                    ],
                }
            ]

        }
    },
    methods: {
        // metodi per gestione delle date usando LuxonJs
        dateFormatter2(index) {
            let dt = luxon.DateTime.fromFormat(this.contacts[this.activeContact].messages[index].date, 'dd/mm/yyyy HH:mm:ss').toLocaleString(luxon.DateTime.TIME_24_SIMPLE);
            return dt;
        },
        getDate(){
            let now = luxon.DateTime.now().toFormat('dd/mm/yyyy HH:mm:ss');
            return now;
        },
        // metodo per selezionare un contatto
        selectContact(index) {
            this.activeContact = index
        },
        // metodo per inviare un messaggio
        sendMessage() {
            if (this.newMessage.trim() !== '') {
                this.contacts[this.activeContact].messages.push({
                    message: this.newMessage,
                    status: 'sent',
                    date: this.getDate()
                })
                this.autoReply();
            }

            this.newMessage = '';
        },
        // metodo per inviare un messaggio automaticamente
        autoReply() {
            setTimeout(() => {
                this.contacts[this.activeContact].messages.push({
                    message: 'ok',
                    status: 'received',
                    date: this.getDate()
                })
            }, 1000)
        },
        //metodo per filtrare la lista delle chat 
        searchChat() {
            this.contacts.forEach((contact) => {
                contact.visible = contact.name.trim().toLowerCase().includes(this.searchKey.trim().toLowerCase());
            })
        },


    }


}).mount('#app')