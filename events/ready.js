module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    const botName = client.user.tag;
    const serverCount = client.guilds.cache.size;
    const userCount = client.users.cache.size;

    
    client.user.setPresence({ activities: [{ name: 'ARES CODE'}], status: 'online' });

   
    console.log(`✅ Bot hazır!`);
    console.log(`Bot: ${botName}`);
    console.log(`Sunucu Sayısı: ${serverCount}`);
    console.log(`Kullanıcı Sayısı: ${userCount}`);
  }
};



// ARES CODE DİSCORD.JS V14 BOŞ ALTYAPI \\