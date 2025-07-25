import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const translations = {
  ru: {
    title: 'RETRO MUSIC',
    subtitle: 'GENERATOR',
    description: 'Generate authentic 8-bit & 16-bit gaming soundtracks',
    musicGenerator: 'Music Generator',
    chooseGenre: 'Choose Genre:',
    nowPlaying: 'Now Playing',
    currentTrack: 'Pixel Adventure Theme',
    generateNew: 'Generate New Track',
    myPlaylist: 'My Playlist',
    exportPlaylist: 'Export Playlist',
    home: 'Главная',
    generator: 'Генератор',
    playlists: 'Плейлисты',
    settings: 'Настройки',
    language: 'Язык',
    genres: {
      chiptune: 'Chiptune',
      arcade: 'Arcade',
      rpg: 'RPG'
    },
    tracks: {
      chiptune: ['Pixel Quest', '8-Bit Dreams', 'Digital Nostalgia', 'Retro Runner'],
      arcade: ['Neon Nights', 'High Score', 'Power Up', 'Laser Blast'],
      rpg: ['Epic Journey', 'Forest Temple', 'Magic Spell', 'Ancient Ruins']
    }
  },
  en: {
    title: 'RETRO MUSIC',
    subtitle: 'GENERATOR',
    description: 'Generate authentic 8-bit & 16-bit gaming soundtracks',
    musicGenerator: 'Music Generator',
    chooseGenre: 'Choose Genre:',
    nowPlaying: 'Now Playing',
    currentTrack: 'Pixel Adventure Theme',
    generateNew: 'Generate New Track',
    myPlaylist: 'My Playlist',
    exportPlaylist: 'Export Playlist',
    home: 'Home',
    generator: 'Generator',
    playlists: 'Playlists',
    settings: 'Settings',
    language: 'Language',
    genres: {
      chiptune: 'Chiptune',
      arcade: 'Arcade',
      rpg: 'RPG'
    },
    tracks: {
      chiptune: ['Pixel Quest', '8-Bit Dreams', 'Digital Nostalgia', 'Retro Runner'],
      arcade: ['Neon Nights', 'High Score', 'Power Up', 'Laser Blast'],
      rpg: ['Epic Journey', 'Forest Temple', 'Magic Spell', 'Ancient Ruins']
    }
  },
  fr: {
    title: 'MUSIQUE RÉTRO',
    subtitle: 'GÉNÉRATEUR',
    description: 'Générez des bandes sonores authentiques de jeux 8-bit et 16-bit',
    musicGenerator: 'Générateur de Musique',
    chooseGenre: 'Choisir le Genre:',
    nowPlaying: 'En Cours',
    currentTrack: 'Thème Aventure Pixel',
    generateNew: 'Générer Nouvelle Piste',
    myPlaylist: 'Ma Playlist',
    exportPlaylist: 'Exporter Playlist',
    home: 'Accueil',
    generator: 'Générateur',
    playlists: 'Playlists',
    settings: 'Paramètres',
    language: 'Langue',
    genres: {
      chiptune: 'Chiptune',
      arcade: 'Arcade',
      rpg: 'RPG'
    },
    tracks: {
      chiptune: ['Quête Pixel', 'Rêves 8-Bit', 'Nostalgie Numérique', 'Coureur Rétro'],
      arcade: ['Nuits Néon', 'High Score', 'Power Up', 'Rayon Laser'],
      rpg: ['Voyage Épique', 'Temple Forêt', 'Sort Magique', 'Ruines Anciennes']
    }
  },
  es: {
    title: 'MÚSICA RETRO',
    subtitle: 'GENERADOR',
    description: 'Genera bandas sonoras auténticas de juegos de 8-bit y 16-bit',
    musicGenerator: 'Generador de Música',
    chooseGenre: 'Elegir Género:',
    nowPlaying: 'Reproduciendo',
    currentTrack: 'Tema Aventura Pixel',
    generateNew: 'Generar Nueva Pista',
    myPlaylist: 'Mi Playlist',
    exportPlaylist: 'Exportar Playlist',
    home: 'Inicio',
    generator: 'Generador',
    playlists: 'Playlists',
    settings: 'Configuración',
    language: 'Idioma',
    genres: {
      chiptune: 'Chiptune',
      arcade: 'Arcade',
      rpg: 'RPG'
    },
    tracks: {
      chiptune: ['Búsqueda Pixel', 'Sueños 8-Bit', 'Nostalgia Digital', 'Corredor Retro'],
      arcade: ['Noches Neón', 'Puntuación Alta', 'Power Up', 'Rayo Láser'],
      rpg: ['Viaje Épico', 'Templo Bosque', 'Hechizo Mágico', 'Ruinas Antiguas']
    }
  }
};

const languages = [
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
];

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentGenre, setCurrentGenre] = useState('chiptune');
  const [volume, setVolume] = useState(75);
  const [currentLanguage, setCurrentLanguage] = useState('ru');
  const [playlistTracks, setPlaylistTracks] = useState([
    { id: 1, title: 'Pixel Adventure', genre: 'chiptune', duration: '2:45' },
    { id: 2, title: 'Boss Battle Theme', genre: 'arcade', duration: '3:20' },
    { id: 3, title: 'Village Melody', genre: 'rpg', duration: '4:15' }
  ]);
  
  const t = translations[currentLanguage];

  const genres = [
    { id: 'chiptune', name: 'Chiptune', color: 'bg-orange-500', icon: 'Gamepad2' },
    { id: 'arcade', name: 'Arcade', color: 'bg-cyan-400', icon: 'Zap' },
    { id: 'rpg', name: 'RPG', color: 'bg-blue-500', icon: 'Sword' }
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const generateTrack = () => {
    const randomTitle = t.tracks[currentGenre][Math.floor(Math.random() * t.tracks[currentGenre].length)];
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
        <header className="text-center py-8 relative">
          {/* Language Selector */}
          <div className="absolute top-0 right-0">
            <Select value={currentLanguage} onValueChange={setCurrentLanguage}>
              <SelectTrigger className="w-40 bg-black/20 border-cyan-400/30 text-white">
                <SelectValue>
                  <div className="flex items-center gap-2">
                    <span>{languages.find(l => l.code === currentLanguage)?.flag}</span>
                    <span className="text-sm">{t.language}</span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-black/90 border-cyan-400/30">
                {languages.map((lang) => (
                  <SelectItem 
                    key={lang.code} 
                    value={lang.code}
                    className="text-white hover:bg-cyan-400/20 focus:bg-cyan-400/20"
                  >
                    <div className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-4 tracking-wider" style={{ fontFamily: 'monospace' }}>
            {t.title}
          </h1>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400 mb-2" style={{ fontFamily: 'monospace' }}>
            {t.subtitle}
          </h2>
          <p className="text-xl text-gray-300">{t.description}</p>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Generator Panel */}
          <div className="lg:col-span-2">
            <Card className="bg-black/20 border-2 border-cyan-400/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <Icon name="Music" size={28} className="text-orange-400" />
                  {t.musicGenerator}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Genre Selection */}
                <div>
                  <h3 className="text-lg text-white mb-4">{t.chooseGenre}</h3>
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
                        {t.genres[genre.id]}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Current Track Display */}
                <Card className="bg-gradient-to-r from-orange-500/20 to-cyan-400/20 border border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl text-white font-bold">{t.nowPlaying}</h4>
                        <p className="text-gray-300">{t.currentTrack}</p>
                      </div>
                      <Badge className="bg-orange-500 text-white">
                        {t.genres[currentGenre]}
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
                  {t.generateNew}
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
                  {t.myPlaylist}
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
                          {t.genres[track.genre]}
                        </Badge>
                        <span className="text-gray-400">{track.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full mt-4 border-white/30 text-white hover:bg-white/10">
                  <Icon name="Download" size={16} className="mr-2" />
                  {t.exportPlaylist}
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
                  {t.home}
                </TabsTrigger>
                <TabsTrigger value="generator" className="data-[state=active]:bg-cyan-400 text-white">
                  <Icon name="Sparkles" size={16} className="mr-2" />
                  {t.generator}
                </TabsTrigger>
                <TabsTrigger value="playlist" className="data-[state=active]:bg-blue-500 text-white">
                  <Icon name="ListMusic" size={16} className="mr-2" />
                  {t.playlists}
                </TabsTrigger>
                <TabsTrigger value="settings" className="data-[state=active]:bg-purple-500 text-white">
                  <Icon name="Settings" size={16} className="mr-2" />
                  {t.settings}
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