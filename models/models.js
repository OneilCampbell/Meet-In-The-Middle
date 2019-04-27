const Sequelize = require("sequelize");

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/meetInTheMiddle_db",
  {
    dialect: "postgres",
    define: {
      underscored: true
    }
  }
);

const User = db.define("user", {
  username: Sequelize.TEXT,
  password: Sequelize.TEXT,
  preferences: DataTypes.ARRAY(DataTypes.TEXT),
  location: Sequelize.TEXT
});

const Venues = db.define("venue", {
  name: Sequelize.TEXT,
  street_address: Sequelize.TEXT,
  city: Sequelize.TEXT,
  state: Sequelize.TEXT,
  zip_code: Sequelize.INTEGER,
  description_tags: DataTypes.ARRAY(DataTypes.TEXT)
})

const Session = db.define("sessions", {
  name: Sequelize.TEXT
})






module.exports={ db }