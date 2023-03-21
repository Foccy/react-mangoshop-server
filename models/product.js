/* DB모델링 : MAKE A TABLE  
sequelize : 테이블과 칼럼생성*/

module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define("Product", {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false /* == not null */,
    },
    price: {
      type: DataTypes.INTEGER(10),
      allowNull: false /* == not null */,
    },
    seller: {
      type: DataTypes.STRING(30),
      allowNull: false /* == not null */,
    },
    description: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    soldout: {
      type: DataTypes.INTEGER(300),
      allowNull: false,
      defaultValue: 0,
    },
  });
  return product;
};
