import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentGenre, setCurrentGenre] = useState('chiptune');
  const [volume, setVolume] = useState(75);
  const [playlistTracks, setPlaylistTracks] = useState([
    { id: 1, title: 'Pixel Adventure', genre: 'chiptune', duration: '2:45' },
    { id: 2, title: 'Boss Battle Theme', genre: 'arcade', duration: '3:20' },
    { id: 3, title: 'Village Melody', genre: 'rpg', duration: '4:15' }
  ]);

  const genres = [
    { id: 'chiptune', name: 'Chiptune', color: 'bg-orange-500', icon: 'Gamepad2' },
    { id: 'arcade', name: 'Arcade', color: 'bg-cyan-400', icon: 'Zap' },
    { id: 'rpg', name: 'RPG', color: 'bg-blue-500', icon: 'Sword' }
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const generateTrack = () => {
    const titles = {
      chiptune: ['Pixel Quest', '8-Bit Dreams', 'Digital Nostalgia', 'Retro Runner'],
      arcade: ['Neon Nights', 'High Score', 'Power Up', 'Laser Blast'],
      rpg: ['Epic Journey', 'Forest Temple', 'Magic Spell', 'Ancient Ruins']
    };
    
    const randomTitle = titles[currentGenre][Math.floor(Math.random() * titles[currentGenre].length)];
    const randomDuration = `${Math.floor(Math.random() * 3) + 2}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`;
    
    const newTrack = {
      id: Date.now(),
      title: randomTitle,
      genre: currentGenre,
      duration: randomDuration
    };
    
    setPlaylistTracks([...playlistTracks, newTrack]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <header className="text-center py-8">
          <h1 className="text-6xl font-bold text-white mb-4 tracking-wider" style={{ fontFamily: 'monospace' }}>
            RETRO MUSIC
          </h1>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400 mb-2" style={{ fontFamily: 'monospace' }}>
            GENERATOR
          </h2>
          <p className="text-xl text-gray-300">Generate authentic 8-bit & 16-bit gaming soundtracks</p>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Generator Panel */}
          <div className="lg:col-span-2">
            <Card className="bg-black/20 border-2 border-cyan-400/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Icon name="Music" size={28} className="text-orange-400" />
                  Music Generator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Genre Selection */}
                <div>
                  <h3 className="text-lg text-white mb-4">Choose Genre:</h3>
                  <div className="flex gap-3 flex-wrap">
                    {genres.map((genre) => (
                      <Button
                        key={genre.id}
                        onClick={() => setCurrentGenre(genre.id)}
                        variant={currentGenre === genre.id ? "default" : "outline"}
                        className={`${currentGenre === genre.id ? genre.color : 'border-gray-600 text-white hover:bg-gray-700'} 
                                  h-12 px-6 font-semibold text-base transition-all duration-200 hover:scale-105`}
                      >
                        <Icon name={genre.icon} size={20} className="mr-2" />
                        {genre.name}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Current Track Display */}
                <Card className="bg-gradient-to-r from-orange-500/20 to-cyan-400/20 border border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl text-white font-bold">Now Playing</h4>
                        <p className="text-gray-300">Pixel Adventure Theme</p>
                      </div>
                      <Badge className="bg-orange-500 text-white">
                        {genres.find(g => g.id === currentGenre)?.name}
                      </Badge>
                    </div>
                    
                    {/* Waveform Visualization */}
                    <div className="flex items-center justify-center h-16 mb-4 bg-black/30 rounded-lg">
                      <div className="flex items-end space-x-1 h-12">
                        {Array.from({ length: 32 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-1 bg-gradient-to-t from-orange-400 to-cyan-400 rounded-sm transition-all duration-200 ${
                              isPlaying ? 'animate-pulse' : ''
                            }`}
                            style={{
                              height: `${Math.random() * 100 + 10}%`,
                              animationDelay: `${i * 50}ms`
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Button
                          onClick={togglePlay}
                          size="lg"
                          className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-12 h-12"
                        >
                          <Icon name={isPlaying ? "Pause" : "Play"} size={20} />
                        </Button>
                        <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                          <Icon name="SkipBack" size={16} className="mr-1" />
                        </Button>
                        <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                          <Icon name="SkipForward" size={16} className="mr-1" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-white">
                        <Icon name="Volume2" size={16} />
                        <Progress value={volume} className="w-20" />
                        <span className="text-sm">{volume}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Generate Button */}
                <Button
                  onClick={generateTrack}
                  size="lg"
                  className="w-full bg-gradient-to-r from-orange-500 to-cyan-400 hover:from-orange-600 hover:to-cyan-500 text-white font-bold text-lg h-14 transition-all duration-200 hover:scale-105"
                >
                  <Icon name="Sparkles" size={24} className="mr-2" />
                  Generate New Track
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Playlist Panel */}
          <div>
            <Card className="bg-black/20 border-2 border-orange-400/30 backdrop-blur-sm h-fit">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <Icon name="ListMusic" size={24} className="text-cyan-400" />
                  My Playlist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {playlistTracks.map((track) => (
                    <div
                      key={track.id}
                      className="p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-200 cursor-pointer group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-medium text-sm group-hover:text-cyan-400 transition-colors">
                          {track.title}
                        </h4>
                        <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <Icon name="Play" size={12} className="text-white" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <Badge variant="outline" className="text-gray-300 border-gray-600">
                          {track.genre}
                        </Badge>
                        <span className="text-gray-400">{track.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full mt-4 border-white/30 text-white hover:bg-white/10">
                  <Icon name="Download" size={16} className="mr-2" />
                  Export Playlist
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Navigation */}
        <Card className="bg-black/20 border-2 border-white/20 backdrop-blur-sm">
          <CardContent className="p-4">
            <Tabs defaultValue="home" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-black/30">
                <TabsTrigger value="home" className="data-[state=active]:bg-orange-500 text-white">
                  <Icon name="Home" size={16} className="mr-2" />
                  Главная
                </TabsTrigger>
                <TabsTrigger value="generator" className="data-[state=active]:bg-cyan-400 text-white">
                  <Icon name="Sparkles" size={16} className="mr-2" />
                  Генератор
                </TabsTrigger>
                <TabsTrigger value="playlist" className="data-[state=active]:bg-blue-500 text-white">
                  <Icon name="ListMusic" size={16} className="mr-2" />
                  Плейлисты
                </TabsTrigger>
                <TabsTrigger value="settings" className="data-[state=active]:bg-purple-500 text-white">
                  <Icon name="Settings" size={16} className="mr-2" />
                  Настройки
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;