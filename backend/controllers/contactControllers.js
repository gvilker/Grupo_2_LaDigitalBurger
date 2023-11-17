const db = require('../database/models');

const controller = {
    getContact: (req, res) => {
        res.render("contact");
    },
    getMessages: async (req, res) => {
        try {
  
            const messages = await db.Contact.findAll();

            res.render("usersMessages", { contactos: messages });
        } catch (error) {
            console.error("Error al obtener mensajes:", error);
            res.redirect("/"); 
        }
    },
    postContact: async (req, res) => {
        console.log("del req.body:", req.body);
    
        try {
            const { contactName, contactEmail, contactMessage } = req.body;
    
            // Verifica que estás obteniendo los valores correctamente
            console.log("name:", contactName);
            console.log("email:", contactEmail);
            console.log("message:", contactMessage);
    
            // Crea una nueva instancia de Contact con los valores proporcionados
            const newContact = await db.Contact.create({
                name: contactName,
                email: contactEmail,
                message: contactMessage,
            });
    
            console.log(newContact);
            res.redirect("/");
        } catch (error) {
            console.error("Error al procesar el formulario de contacto:", error);
            res.redirect("/contact");
        }
    },
};

module.exports = controller;
