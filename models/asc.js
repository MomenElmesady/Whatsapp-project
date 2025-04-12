const User = require("./user.model")
const Status = require("./status.model")
const Contact = require("./contact.model")
const StatusView = require("./statusViews.model")
const StatusReact = require("./statusReacts.model")

// User & Status (One-to-Many)
User.hasMany(Status, { foreignKey: 'user_id', as: "statuses" }); // A user can have multiple statuses
Status.belongsTo(User, { foreignKey: "user_id", as: "user" }); // A status belongs to a user

// Status Views (One-to-Many)
User.hasMany(StatusView, { foreignKey: 'user_id', as: "statusViews" }); // A user can have multiple status views
StatusView.belongsTo(User, { foreignKey: "user_id", as: "user" }); // A status view belongs to a user

Status.hasMany(StatusView, { foreignKey: 'status_id', as: "views" }); // A status can have multiple views
StatusView.belongsTo(Status, { foreignKey: "status_id", as: "status" }); // A status view belongs to a status

// Status Reacts (One-to-Many)
User.hasMany(StatusReact, { foreignKey: 'user_id', as: "statusReacts" }); // A user can have multiple reactions
StatusReact.belongsTo(User, { foreignKey: "user_id", as: "user" }); // A reaction belongs to a user

Status.hasMany(StatusReact, { foreignKey: 'status_id', as: "reacts" }); // A status can have multiple reactions
StatusReact.belongsTo(Status, { foreignKey: "status_id", as: "status" }); // A reaction belongs to a status


User.belongsToMany(User, { through: Contact, as: "contacts", foreignKey: "user_id", otherKey: "contact_id" });
