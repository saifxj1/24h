module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("F A L C O N",{ type: 'STREAMING'});
};
