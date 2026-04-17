import Message from "../models/Message.js";
import User from "../models/User.js"; 

// HOME PAGE
export const homePage = async (req, res) => {
  try {
    const messages = await Message.find().populate('author');
    const users = await User.find();
    res.render("index", { messages, users });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error loading page");
  }
};

// CREATE MESSAGE
export const createMessage = async (req, res) => {
  try {
    const message = req.body.message.trim();
    const author = req.body.currentUser;
    await Message.create({message, author});
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating message");
  }
};

// EDIT MESSAGE
export const editMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    res.render("edit", { message });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error cancelling edit");
  }
};

export const updateMessage = async (req, res) => {
  try {
    const newMessage = req.body.message;
    const updatedMessage = await Message.findByIdAndUpdate(
      req.params.id,
      { message: newMessage },
      //{ new: true } // returns updated doc
    );

    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating edit");
  }
};

export const cancelEdit = (req, res) => {
  try {
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error cancelling edit");
  }
};

// DELETE MESSAGE
export const deleteMessage = async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting message");
  }
};

