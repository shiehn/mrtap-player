export default class GridItemStem {
    constructor(id, bpm, chords, key, sectionId, type, variationId, source, waveform,
                showPreviewIcon,
                previewIconPath,
                previewPlayIconPath,
                previewStopIconPath
    ) {
        this.id = id
        this.bpm = bpm
        this.chords = chords
        this.key = key
        this.sectionId = sectionId
        this.type = type
        this.variationId = variationId
        this.source = source
        this.waveform = waveform
        this.showPreviewIcon = showPreviewIcon
        this.previewIconPath = previewIconPath
        this.previewPlayIconPath = previewPlayIconPath
        this.previewStopIconPath = previewStopIconPath
    }
}