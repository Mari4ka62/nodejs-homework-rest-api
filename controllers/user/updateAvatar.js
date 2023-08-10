const jimp = require("jimp");

const path = require("path");

const User = require("../../models/userModel");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { originalName } = req.file;

  const fileName = `${_id}_${originalName}`;

  const avatar = await jimp.read(req.file.buffer);

  await avatar.cover(250, 250).writeAsync(path.join(avatarDir, fileName));

  const avatarURL = path.join("avatars", fileName);

  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({
    avatarURL,
  });
};
module.exports = updateAvatar;
