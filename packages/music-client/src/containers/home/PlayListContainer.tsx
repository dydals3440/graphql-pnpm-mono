import PlayListItem from '@/presentationals/home/PlayListItem';
import { useAppStore } from '@/store';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';

export default function PlayListContainer() {
  const {
    playList, // 현재 재생 목록
    playLists, // 모든 재생 목록
    setCurrentSong, // 현재 재생할 곡 설정
    removeFromPlayList, // 재생 목록에서 곡 제거
    addPlayList, // 새 재생 목록 추가
    addSongToPlayList, // 재생 목록에 곡 추가
    likeSong, // 곡 좋아요
    setPlayList, // 재생 목록 업데이트
  } = useAppStore();

  // 드래그 종료 시 호출되는 핸들러
  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) {
      // 드롭 위치가 없을 경우 아무 작업도 하지 않음
      return;
    }

    // 기존 목록을 복사한 뒤, 순서를 변경
    const items = Array.from(playList);
    const [reorderedItem] = items.splice(result.source.index, 1); // 드래그한 항목 제거
    items.splice(result.destination.index, 0, reorderedItem); // 새 위치에 삽입

    // 재생 목록 업데이트
    setPlayList(items);
  };

  return (
    <div className='flex flex-col h-full'>
      {/* 재생 목록 제목 */}
      <h1 className='px-30 py-20 text-gray200 text-24 font-medium w-[522px]'>
        재생 목록
      </h1>

      {/* 드래그 앤 드롭 컨텍스트 */}
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='playlist_items'>
          {(provided) => (
            <ul
              className='flex-1 px-30 overflow-y-auto'
              {...provided.droppableProps}
              ref={provided.innerRef} // 드롭 영역의 ref 설정
            >
              {playList.map((song, index) => (
                // 개별 재생 목록 아이템
                // 아이템을 Draggable로 변경
                <Draggable
                  key={song.id}
                  draggableId={song.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <li
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <PlayListItem
                        key={song.id} // 고유 키
                        song={song} // 곡 정보
                        playlists={playLists} // 모든 재생 목록 전달
                        onClick={setCurrentSong} // 클릭 시 현재 곡 설정
                        onRemoveFromPlayList={removeFromPlayList} // 제거 버튼 클릭 시 호출
                        onAddPlayList={addPlayList} // 새 재생 목록 추가
                        onAddSongToPlaylist={addSongToPlayList} // 곡을 특정 재생 목록에 추가
                        onLikeSong={likeSong} // 좋아요 버튼 클릭 시 호출
                      />
                    </li>
                  )}
                </Draggable>
              ))}
              {/* 드래그 중인 항목이 영역을 차지하도록 하는 placeholder */}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
