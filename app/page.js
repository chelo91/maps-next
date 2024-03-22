import MapsComponents from "@/components/Maps";
import mongoose from 'mongoose';
import markModel from "@/models/marks.model";
await mongoose.connect(process.env.DATABASE_URL);

const markers = await markModel.find().lean();
const markersFront = markers.map((marker) => {
    return {
        slug: marker.slug,
        title: marker.title,
        description: marker.description,
        type: marker.type,
        latitude: marker.latitude,
        longitude: marker.longitude
    };
});

export default function Maps({ searchParams }) {
    let filterMarkers = markersFront;
    if (searchParams && searchParams.q) {
        filterMarkers = markersFront.filter((marker) => {
            return marker.type === searchParams.q;
        });
    }
    return (
        <main >
            <MapsComponents data={filterMarkers} />
        </main>
    );
}