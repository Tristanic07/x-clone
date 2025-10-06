import Notification from "../models/notification.model.js";

export const getNotification = async (req, res) => {
    try {
        const userId = req.user._id;
        
        const notification = await Notification.find({ to: userId })
        .sort({ createdAt: -1})
        .populate({
            path: "from",
            select: "username profileImg"
        });
        if(!notification){
            return res.status(200).json([]);
        }

        await Notification.updateMany({to: userId}, {read: true});

        return res.status(200).json(notification)
    } catch (error) {
        console.log("Error in getNotifications: ", error.message);
        res.status(500).json({error: error.message}); 
    }
}

export const deleteNotifications = async (req, res) => {
    try {
        const userId = req.user._id;

        await Notification.deleteMany({ to: userId });
        
        return res.status(200).json({ message: "Notifications deleted successfully"})
    } catch (error) {
        console.log("Error in deleteNotifications: ", error.message);
        res.status(500).json({error: error.message});    
    }
}

export const deleteNotification = async (req, res) => {
    try {
        const notificationId = req.params.id;
        const userId = req.user._id;
        const notification = await Notification.findById(notificationId);

        if(!notification){
            return res.status(404).json({ error: "Notification not found" });
        }

        if(notification.to.toString() !== userId.toString()){
            return res.status(400).json({ error: "You are not allowed to delete this notification"})
        }

        await Notification.findByIdAndDelete(notificationId);
        return res.status(200).json({message: "Notification successfully deleted"})
    } catch (error) {
        console.log("Error in deleteNotification: ", error.message);
        res.status(500).json({error: error.message});  
    }
}